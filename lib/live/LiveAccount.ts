import { AccountId, PrivateKey, PublicKey, Transaction } from "@hashgraph/sdk";

import { ApiSession } from "../ApiSession";
import { SolidityAddressable } from "../core/SolidityAddressable";
import { LiveEntity } from "./LiveEntity";

type LiveAccountConstructorArgs = {
  session: ApiSession,
  id: AccountId,
  publicKey: PublicKey,
};

export class LiveAccount extends LiveEntity<AccountId> implements SolidityAddressable {
  public readonly publicKey: PublicKey;

  constructor({ session, id, publicKey }: LiveAccountConstructorArgs) {
    super(session, id);
    this.publicKey = publicKey;
  }
  
  public async getSolidityAddress(): Promise<string> {
    return this.id.toSolidityAddress();
  }
}

/**
 * A wrapper class that contains both a {@link LiveAccount} and its associated private-key generated, most likely, at network-creation time.
 * Consequently, this is meant to be generated when first {@link ApiSession.create}-ing an {@link Account}.
 */
 export class LiveAccountWithPrivateKey extends LiveAccount {
  public readonly privateKey: PrivateKey;

  constructor({ session, id, publicKey, privateKey }: LiveAccountConstructorArgs & { privateKey: PrivateKey }) {
      super({ session, id, publicKey });
      this.privateKey = privateKey;
  }

  public tryToSign(transaction: Transaction): void {
    const signature = this.privateKey.signTransaction(transaction);

    transaction.addSignature(this.publicKey, signature);
  }
}