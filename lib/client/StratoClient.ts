import { 
    Query, 
    Transaction, 
    TransactionReceipt, 
    TransactionResponse 
} from "@hashgraph/sdk";
import Executable from "@hashgraph/sdk/lib/Executable";
import { PublicAccountInfo as PublicAccountInfo } from "../ApiSession";

export interface StratoClient {
    get account(): PublicAccountInfo;
    
    execute<T extends Transaction|Query<Q>, Q>(transaction: T): Promise<
        T extends Query<infer Q> ? Q : 
        T extends Executable<unknown, unknown, infer OUT> ? OUT : 
        never
    >;
    getReceipt(response: TransactionResponse): Promise<TransactionReceipt>;
}