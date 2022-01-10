import { Interface } from '@ethersproject/abi';
import { 
  AccountInfo, 
  Client, 
  ContractCallQuery, 
  ContractExecuteTransaction,
  ContractFunctionResult, 
  ContractId, 
  FileContentsQuery, 
  FileId, 
  ReceiptStatusError, 
  Status, 
  Transaction, 
  TransactionReceipt, 
  TransactionResponse 
} from '@hashgraph/sdk';

import { LiveContract } from './live/LiveContract';
import { LiveEntity } from './live/LiveEntity';
import { LiveJson } from './live/LiveJson';
import { SolidityAddressable } from './SolidityAddressable';
import { Json } from './static/Json';
import { UploadableEntity } from './static/UploadableEntity';
import { TransactionReceiptQuery } from './TransactionReceiptQuery';

type ApiSessionConstructorArgs = {
  hClient: Client,
  operatorInfo: AccountInfo
};
type ContractFunctionCall = ContractCallQuery | ContractExecuteTransaction;

/**
 * The core class used for all business-logic, runtime network-interactions.
 * 
 * Should only be instantiable through a {@link HederaNetwork} method such as the {@link HederaNetwork.defaultApiSession} one.
 */
export class ApiSession implements SolidityAddressable {
  private readonly client: Client;
  private readonly operatorInfo: AccountInfo;

  /**
   * @hidden
   */
  constructor({ hClient, operatorInfo }: ApiSessionConstructorArgs) {
    this.client = hClient;
    this.operatorInfo = operatorInfo;
  }

  /**
   * Retrieves the operator {@link AccountId} for this {@link ApiSession}.
   */
  public get accountId() {
    return this.client.operatorAccountId;
  }

  /**
   * Retrieves the operator's public-key.
   */
  public get publicKey() {
    return this.client.operatorPublicKey;
  }

  /**
   * Executes a {@link TransactionReceiptQuery} with the purpose of optaining a {@link TransactionReceipt} for apreviously executed, network, operation.
   */
   public async execute(transaction: TransactionReceiptQuery): Promise<TransactionReceipt>;
   /**
    * Queries/Executes a contract function, returning the {@link ContractFunctionResult} if successfull.
    */
   public async execute(transaction: ContractFunctionCall): Promise<ContractFunctionResult>;
   /**
    * A catch-all/generic {@link Transaction} execution operation yeilding, upon success, of a {@link TransactionResponse}.
    */
   public async execute(transaction: Transaction): Promise<TransactionResponse>;
   public async execute(transaction: ContractFunctionCall|TransactionReceiptQuery|Transaction): Promise<ContractFunctionResult|TransactionReceipt|TransactionResponse> {
     const isContractTransaction = transaction instanceof ContractCallQuery || transaction instanceof ContractExecuteTransaction;
     const isReceiptQuery = transaction instanceof TransactionReceiptQuery;
     const txResponse = await transaction.execute(this.client);
 
     if (isContractTransaction) {
       if (txResponse instanceof TransactionResponse) {
         const txRecord = await txResponse.getRecord(this.client);
   
         // Inspired from https://github.com/hashgraph/hedera-sdk-js/blob/c4a8d339648651a545782089ae4b18b972f2e356/src/transaction/TransactionResponse.js#L39
         // since, at this step, getRecord errors are the same as getReceipt ones
         if (txRecord.receipt.status !== Status.Success) {
           throw new ReceiptStatusError({
               transactionReceipt: txRecord.receipt,
               status: txRecord.receipt.status,
               transactionId: txResponse.transactionId,
           });
         }
         return txRecord.contractFunctionResult;
       } else {
         // Constant function call (query) was done
         return txResponse as ContractFunctionResult;
       }
     } else if (isReceiptQuery) {
       return (txResponse as unknown) as TransactionReceipt;
     }
     // Reaching this point means that the executed transaction is generic in which case we just return it rawly
     return txResponse as TransactionResponse;
   }

  /**
   * Retrieves the solidity-address of the underlying {@link AccountId} that's operating this session.
   */
  async getSolidityAddress(): Promise<string> {
    return this.accountId.toSolidityAddress();
  }

  /**
   * Loads a pre-deployed {@link LiveContract} ready to be called into at runtime. The contract-interface is passed in raw-ly 
   * through the {@link abi} param.
   * 
   * @param {object} options
   * @param {ContractId|string} options.id - the {@link ContractId} to load being it string-serialized or already parsed
   * @param {Interface|Array} options.abi - either the [etherjs contract interface](https://docs.ethers.io/v5/api/utils/abi/interface/) or the [etherjs Interface compatible ABI 
   *                                        definitions](https://docs.ethers.io/v5/api/utils/abi/interface/#Interface--creating) to use with the resulting live-contract
   */
  public async getLiveContract({ id, abi = [] }: { id: ContractId|string, abi?: Interface|any[] }): Promise<LiveContract> {
    let targetedContractId: ContractId;

    try {
      targetedContractId = id instanceof ContractId ? id : ContractId.fromString(id)
    } catch(e) {
      throw new Error("Please provide a valid Hedera contract id in order try to lock onto an already-deployed contract.");
    }
    return new LiveContract({ 
      session: this,
      id: targetedContractId,
      cInterface: abi instanceof Interface ? abi : new Interface(abi)
    });
  }

  /**
   * Given a {@link FileId} (string-serialized or parsed) of a deployed {@link Json} instance, retrieves a {@link LiveJson} reference.
   * 
   * @param {object} options 
   * @param {FileId | string} options.id - the file-id to load parsed as a {@link FileId} or raw in a string-serialized
   */
  public async getLiveJson({ id }: { id: FileId|string }): Promise<LiveJson> {
    let targetedFileId: FileId;

    try {
      targetedFileId = id instanceof FileId ? id : FileId.fromString(id)
    } catch(e) {
      throw new Error("Please provide a valid Hedera file id in order try to lock onto an already-deployed Json object.");
    }
    const fileContentsBuffer = await new FileContentsQuery()
      .setFileId(targetedFileId)
      .execute(this.client);
    const fileContents = new TextDecoder('utf8').decode(fileContentsBuffer);
    
    // TODO: use file Memo to store hash of file-contents and only return LiveJson instance if the 2 values match
    return new LiveJson({ 
      session: this,
      id: targetedFileId,
      data: JSON.parse(fileContents)
    });
  }

    /**
   * Given an {@link UploadableEntity}, it triest ot upload it using the currently configured {@link ApiSession} passing in-it any provided {@link args}.
   * 
   * @param {Uploadable} what - The {@link UploadableEntity} to push through this {@link ApiSession}
   * @param {*} args - A list of arguments to pass through the upload operation itself.
   *                   Note: this list has, by convention, at various unpaking stages in the call hierarchy, the capabilities to specify SDK behaviour through
   *                         eg. "_file" ({@link UploadableEntity}) or "_contract" ({@link Contract})
   * @returns - An instance of the {@link UploadableEntity} concrete result-type which is a subtype of {@link LiveEntity}.
   */
     public async upload<T extends LiveEntity<R>, R>(what: UploadableEntity<T, R>, ...args: any[]): Promise<T>;

     /**
      * Given a raw JSON {@link object}, it triest ot upload it using the currently configured {@link Client} passing in-it any provided {@link args}.
      * 
      * `Note:` This is the same as calling the more verbose equivalent of `upload(new Json(what))`.
      * 
      * Example of usage:
      * ```js
      * await apiSession.upload({a: 1, {b: "c"}})
      * ```
      * 
      * @param {object} what - The {@link Json}-acceptable payload to push through this {@link ApiSession}
      * @param {*} args - A list of arguments to pass through the upload operation itself.
      *                   Note: this list has, by convention, at various unpaking stages in the call hierarchy, the capabilities to specify SDK behaviour through
      *                         eg. "_file" ({@link Uploadable}) or "_contract" ({@link Contract})
      * @returns - An instance of the associated {@link LiveJson} resulting {@link LiveEntity}.
      */
     public async upload(what: object, ...args: any[]): Promise<LiveJson>;
   
     // Overload implementation
     public async upload<T extends LiveEntity<R>, R>(what: UploadableEntity<T, R>|object, ...args: any[]): Promise<T|LiveJson> {
       let uploadableWhat: UploadableEntity<T, R>;
   
       if (what instanceof UploadableEntity === false) {
         // Try to go with a live-json upload
         if (Json.isInfoAcceptable(what)) {
           uploadableWhat = (new Json(what) as unknown) as UploadableEntity<T, R>;
         } else {
           // There's nothing we can do
           throw new Error("Can only upload UploadableFile-s or Json-file acceptable content.");
         }
       } else {
         // upload what was given as is since it's an UploadableEntity type already
         uploadableWhat = (what as unknown) as UploadableEntity<T, R>;
       }
       return uploadableWhat.uploadTo({ session: this, args });
     }
}
