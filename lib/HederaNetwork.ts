import * as dotenv from 'dotenv';
import * as process from "process";

import {
  AccountId,
  AccountInfoQuery,
  Client,
  PrivateKey,
} from "@hashgraph/sdk";

import { CredentialsInvalidError } from "./errors/CredentialsInvalidError";
import { EnvironmentInvalidError } from "./errors/EnvironmentInvalidError";
import { ApiSession } from "./ApiSession";
import { NetworkName } from "@hashgraph/sdk/lib/client/ManagedNetwork";

export const HEDERA_CUSTOM_NET_NAME = "customnet";

type HederaDefaultApiSessionEnvSource = { 
  env?: { [key: string]: string }, 
  path?: string 
};
type HederaNodesAddressBook = { [key: string]: string | AccountId };

export class HederaNetwork {
  /**
   * Builds and retrieves the default {@link ApiSession} associated with this runtime. There are currently 2 ways of providing the parameters requried for the api-session to be built:
   * - either pass them through the {@link env} parameter property (defaults to the 'process.env' for node environments) or 
   * - give the path to a 'dotenv' like file (defaults to '.env') from which they are loaded by the library (the {@link path} parameter)
   * 
   * Note: If both these parameters are set, the environment/runtime (env) values overwrite the path-loaded (via path) dotenv ones.
   */
  public static defaultApiSession({ env = process.env, path = '.env' }: HederaDefaultApiSessionEnvSource = {}): Promise<ApiSession> {
    const eParams = HederaNetwork._resolveDefaultSessionParamsFrom({ env, path });

    return HederaNetwork.for({
      name: eParams.HEDERA_NETWORK,
      nodes: HederaNetwork._parseNetworkNodeFrom(eParams.HEDERA_NODES)
     }).login({
      operatorId: eParams.HEDERA_OPERATOR_ID,
      operatorKey: eParams.HEDERA_OPERATOR_KEY
     });
  }

  /**
   * Builds a HederaNetwork link which can be later used to create api-sessions.
   * 
   * @param {object} options
   * @param {string} options.name - The name of the network to target. Can be any of the following: mainnet, testnet, previewnet or customnet
   * @param {object} options.nodes - The 'Client.forNetwork' compatible method argument which consists of properties that are node lacations mapped to account Ids.
   *                                 Ex. { '127.0.0.1:50211': new AccountId(3), '127.0.0.1:50212': new AccountId(4) }
   *                                 Required if {@param options.name} is customnet otherwise it's optional. 
   * @returns a {@link HederaNetwork} instance
   */
  public static for({ name, nodes = {} }: { 
    name: string, 
    nodes: HederaNodesAddressBook
  }): HederaNetwork {
    let chosenClient = null;
    
    const availableNetworkNames = [ HEDERA_CUSTOM_NET_NAME, "mainnet", "testnet", "previewnet" ];

    if (!availableNetworkNames.includes(name)) {
      throw new EnvironmentInvalidError(`There is no such '${name}' network available. In order to continue, please choose a valid name from: ${availableNetworkNames.join(', ')}`);
    }

    try {
      chosenClient = Client.forName(name as NetworkName);
    } catch(e) {
      // This is a non-standard client. Maybe it's a local-net one?
      if (HEDERA_CUSTOM_NET_NAME === name) {
        if (!nodes || Object.keys(nodes).length === 0) {
          throw new EnvironmentInvalidError(`Please provide a list of network nodes in order to use a ${name} network.`);
        }
        chosenClient = Client.forNetwork(nodes);
      } else {
        // Note: this should never happen, but still ... better play it safe
        throw new EnvironmentInvalidError(`There is no such ${name} network available in this library. Available network names to choose from are: ${availableNetworkNames.join(', ')}`);
      }
    }
    return new HederaNetwork(chosenClient);
  }


  private static _resolveDefaultSessionParamsFrom(source: HederaDefaultApiSessionEnvSource): { [key: string]: string } {
    const dEnv = dotenv.config({ path: source.path }).parsed;
    const pEnv = source.env;

    return Object.assign({}, dEnv, pEnv);
  }

  /**
   * Parses the provided string and constructs the hedera-network nodes object required to initialize a custom Hedera Client.
   * The expected {@param string} format is in the following form: <ip>:<port>#<account-id>[,<ip2>:<port2>#<account-id2>...]
   * Example: 127.0.0.1:50211#2,127.0.0.1:50212:#5 would get mapped to the following object: 
   * {
   *   "127.0.0.1:50211": new AccountId(2),
   *   "127.0.0.1:50212": new AccountId(5)
   * }
   */
  private static _parseNetworkNodeFrom(string: string): HederaNodesAddressBook {
    let networkInfo = {};

    if (string) {
      const nodeEntries = string.split(/\s*,\s*/);
      const nodeDefinitions = nodeEntries.map(entry => {
        if (entry.indexOf("#") === -1) {
          throw new EnvironmentInvalidError(`Node definition entry '${entry}' is missing the account-id separator (#)`);
        }

        const [address, rawAccountNr] = entry.split("#");
        const accountNr = parseInt(rawAccountNr);

        return {[address]: new AccountId(accountNr)};
      });

      for (const rnEntry of nodeDefinitions) {
        const nodeAddress = Object.keys(rnEntry)[0];
        networkInfo[nodeAddress] = rnEntry[nodeAddress];
      }
    }
    return networkInfo;
  }

  _apiSessions = {};

  public static validateOperator({ id, key }: { id: string, key: string }): { accountId: AccountId, privateKey: PrivateKey } {
    let accountId;
    let privateKey;

    try {
      accountId = AccountId.fromString(id);
    } catch {
      throw new CredentialsInvalidError("The provided operatorId is either invalid or missing.");
    }
    try {
      privateKey = PrivateKey.fromString(key);
    } catch {
      throw new CredentialsInvalidError("The provided operatorKey is either invalid or missing.");
    }

    return { accountId, privateKey };
  }

  private constructor(public readonly client: Client) { }

  public async login({ operatorId, operatorKey }: { operatorId: string, operatorKey: string }) {
    // TODO: validate parameters

    if (!this._apiSessions[operatorId]) {
      const { accountId, privateKey } = HederaNetwork.validateOperator({
        id: operatorId,
        key: operatorKey
      });
      const hClient = this.client.setOperator(accountId, privateKey);
      const accountInfoQuery = new AccountInfoQuery().setAccountId(accountId);
      const accountInfo = await accountInfoQuery.execute(hClient);

      // TODO: check accountInfo response
      //       see https://docs.hedera.com/guides/docs/sdks/cryptocurrency/get-account-info
      this._apiSessions[operatorId] = new ApiSession({ hClient, operatorInfo: accountInfo });
    }

    return this._apiSessions[operatorId];
  }
}
