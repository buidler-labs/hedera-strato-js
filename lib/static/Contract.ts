import {
  ContractCreateTransaction,
} from "@hashgraph/sdk";

import { ArgumentsOnFileUploaded, UploadableEntity } from "./UploadableEntity";
import { CompileIssues } from '../errors/CompileIssues';
import { LiveContract } from '../live/LiveContract';
import { HContractFunctionParameters } from '../HContractFunctionParameters';
import { Interface } from '@ethersproject/abi';
import { SolidityCompiler, VIRTUAL_SOURCE_CONTRACT_FILE_NAME } from '../SolidityCompiler';

const DEFAULT_GAS_FOR_CONTRACT_CREATION = 75_000;

type AllContractOptions = {
  code?: string,
  ignoreWarnings?: boolean,
  path?: string

};
type NewContractOptions = { 
  index?: number, 
  name?: string, 
} & AllContractOptions;

export class Contract extends UploadableEntity<LiveContract> {
  /**
   * Given an index or a name, this returns a specific contract following the successfull compilation of 
   * either the contract code itself ({@param options.code}) or the solidity file located at the provided {@param options.path}
   * 
   * In terms of precidence, it first checks to see if the {@param options.name} is provided and, if so, it uses that otherwise
   * it looks at the {@param options.index} one and goes with that.
   * 
   * @param {Object} options - Provides a source and controls various {@see Contract} construction settings.
   * @param {string} options.code - The Solidity code to build the contracts from.
   * @param {number} [options.index=0] - The Contract index to retrieve (if the name is not provided).
   * @param {boolean} [options.ignoreWarnings=false] - Should we fail at compile-time warnings or not?
   * @param {string} [options.name] - The Contract we wish to retrieve (if no index is provided).
   * @param {string} options.path - The top-level solidity code file path
   * @returns {Promise<Contract>}
   */
  public static async newFrom({ code, index = 0, ignoreWarnings = false, name, path }: NewContractOptions): Promise<Contract> {
    if (!code && ! path) {
      throw new Error("In order to continue, either provide the direct solidity code or a file path where the top-level code resides.");
    }
    if (!name && (!!index || (Number.isInteger(index) && index < 0))) {
      throw new Error("Please provide either a non-negative index or the actual name of the contract to reference the Contract instance with.");
    }

    const contracts = await Contract.allFrom({ code, ignoreWarnings, path });

    if (name) {
      const contractOfInterest = contracts.find(contract => contract.name === name);

      if (!contractOfInterest) {
        throw new Error(`There is no such contract named '${name}' present in the referenced code.`);
      }
      return contractOfInterest;
    } else if (index >= contracts.length) {
      throw new Error(`Index out of range. Your requested contract-id ${index} is not in range of the ${contracts.length} contracts present in the given code.`);
    }
    return contracts[index];
  }

  /**
   * Returns all the contracts present in a given {@param options.code}.
   * 
   * @param {Object} options - Provides a source and controls various {@see Contract} construction settings.
   * @param {string} options.code - The Solidity code to build the contracts from.
   * @param {boolean} [options.ignoreWarnings=false] - Should we fail at compile-time warnings or not?
   * @param {string} options.path - The top-level solidity code file path
   * @returns {Promise<Array<Contract>>} - A list of {@see Contract}s parsed via Hedera's officially supported solidity version compiler (`solc`) from the code
   */
  static async allFrom({ code, ignoreWarnings = false, path }: AllContractOptions): Promise<Array<Contract>> {
    if (!code && ! path) {
      throw new Error("Can only retrieve contracts if either the direct solidity code is provided or a file path where that top-level code resides.");
    }

    const rawCompileResult = await SolidityCompiler.compile({ code, path });
    const compileResult = Contract._tryParsingCompileResultFrom({ rawCompileResult, ignoreWarnings });
    const compiledContractsInfo = compileResult.contracts[VIRTUAL_SOURCE_CONTRACT_FILE_NAME];
    let contracts = [];

    for (const contractName of Object.keys(compiledContractsInfo)) {
      const solo = compiledContractsInfo[contractName];

      contracts.push(
        new Contract({
          name: contractName,
          abi: solo.abi,
          byteCode: solo.evm.bytecode.object
        })
      );
    }
    return contracts;
  }

  /**
   * Deserializes the provided Contract representation which is assumed to be the output of the {@see Contract.serialize} method call.
   * 
   * @param {string} what 
   * @returns {Contract}
   */
  static deserialize(what: string): Contract {
    let jWhat: any = {};

    try {
      jWhat = JSON.parse(what)
    } catch(e) {
      throw new Error("Please provide something valid to be deserialized.");
    }
    return new Contract(jWhat);
  }

  static _tryParsingCompileResultFrom({ rawCompileResult, ignoreWarnings }) {
    const compileResult = JSON.parse(rawCompileResult);

    CompileIssues.tryThrowingIfErrorsIn({ compileResult, ignoreWarnings });
    return compileResult;
  }

  /**
   * The name of the referenced Solidity contract. 
   * Note: this can be different then the source-file used to host it.
   */
  public readonly name: string;
  /**
   * The byte-code representation of the contract's code ready to be uploaded and executed inside an EVM. 
   */
  public readonly byteCode: string;
  /**
   * Retrieves the Contract's Application Binary Interface (ABI) specs.
   * {@link https://docs.soliditylang.org/en/v0.8.10/abi-spec.html#json}
   * @returns {Interface}
   */
  public readonly interface: Interface;

  private constructor({ name, abi, byteCode }) {
    if (!name) {
      throw new Error("Please provide a name for the Contract instance.");
    } else if(!abi) {
      throw new Error("Please provide a, valid, EthersProject-compatible, ABI definition for the Contract instance.");
    } else if(!byteCode || !/^[0-9a-f]+$/.test(byteCode)) {
      throw new Error("Please provide the valid formatted byte-code definition for the Contract in order to instantiate it.");
    }

    super();
    this.name = name;
    this.byteCode = byteCode;
    this.interface = new Interface(abi);
  }

  /**
   * Tests if this contract is the same (functionally speaking) as another one.
   */
  equals(other: Contract): boolean {
    if (other instanceof Contract === false) {
      return false;
    }
    return this.byteCode === other.byteCode;
  }

  /**
   * Serializes the current entity. This then can be reversed via calling {@see Contract.deserialize}.
   * 
   * Note: when de-serializing, the properties exported here should allow for a complete re-instantiation of the original {@see Contract}. 
   * 
   * @returns {string} - The serialized representation of the current instance
   */
  serialize(): string {
    return JSON.stringify({
      name: this.name,
      byteCode: this.byteCode,
      abi: this.interface.format()
    });
  }

  protected override async _getContent() {
    return this.byteCode;
  }

  /**
   * Having a file-create {@link receipt} provided, this function uses it to create a contract via the Hedera Contract Service (HCS). The provided {@link args}
   * are used both to populate the {@see ContractCreateTransaction} constructor (if the first object from the list has a '_contract' property) and to pass along
   * as constructor arguments when publishing the Contract. 
   * If there is a constructor config object present (first args from list if it has the '_contract' property) this is consumed and the remainder of the arguments 
   * are passed to the Contract constructor.
   */
  protected override async _onFileUploaded({ client, receipt, args = [] }: ArgumentsOnFileUploaded): Promise<LiveContract> {
    const createContractTransaction = new ContractCreateTransaction(this._getContractCreateOptionsFor({ client, receipt, args }));

    return await LiveContract.newFollowingUpload({
      client,
      contract: this,
      transaction: createContractTransaction
    });
  }

  private _getContractCreateOptionsFor({ client, receipt, args = [] }: ArgumentsOnFileUploaded) {
    const contractFileId = receipt.fileId;
    const constructorDefinition = this.interface.deploy;
    let contractCreationOverrides: any = {};

    if (args.length > 0 && Object.keys(args[0]).length !== 0 && Object.keys(args[0])[0] === '_contract') {
      contractCreationOverrides = args[0]._contract;
      args = args.slice(1);
    }
    return Object.assign({}, {
      adminKey: client.operatorPublicKey,
      bytecodeFileId: contractFileId,
      constructorParameters: new HContractFunctionParameters(constructorDefinition, args),
      gas: DEFAULT_GAS_FOR_CONTRACT_CREATION,
      ...contractCreationOverrides
    });
  }
}
