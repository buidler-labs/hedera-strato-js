import { ConstructorFragment, FunctionFragment } from "@ethersproject/abi";
import BigNumber from "bignumber.js";
import { arrayify } from "@ethersproject/bytes";

import { Hbar, ContractFunctionParameters as HederaContractFunctionParameters } from "@hashgraph/sdk";

import { ParamTypeToFunctionNameMapper } from "../ParamTypeToFunctionNameMapper";
import { isSolidityAddressable } from "../core/SolidityAddressable";

export class ContractFunctionParameters extends HederaContractFunctionParameters {
  /**
     * Given a set of user-defined arguments and starting from the provided function/constructor interface definition, 
     * facilitates the construction of a {@see ContractFunctionParameters} ready to be embedded in a Contract transaction/query.
     * 
     * @param {ConstructorFragment|FunctionFragment} fDescription - The function/constructor schema
     * @param {Array} args - A list of arguments to be parsed into the underlying AbiDescription 
     */
  static async newFor(fDescription: ConstructorFragment | FunctionFragment, args: any[]) {
    if (!Array.isArray(args)) {
      throw new ContractFunctionParametersParser("I need an array of args in order to construct the ContractFunctionParameters instance for.");
    } else if (fDescription.inputs.length !== args.length) {
      throw new ContractFunctionParametersParser(`The contract expects ${fDescription.inputs.length} arguments yet ${args.length} were provided.`);
    }

    const applyTransformationToArg = (argument: any, transformArg: (arg: any) => any) => 
      Array.isArray(argument) ? argument.map(transformArg) : transformArg(argument)
    
    const toReturn = new ContractFunctionParameters();

    for (const id in args) {
      const fInputDescription = fDescription.inputs[id];
      const fctCallName = new ParamTypeToFunctionNameMapper(fInputDescription).map({ prefix: 'add' });
      const shouldUseBigNumbers = fctCallName.indexOf("64") !== -1 || fctCallName.indexOf("256") !== -1;
      let argToAdd = args[id];

      if (fInputDescription.type.startsWith('address')) {
        const considerMappingSolidityAddressableToAddress = (arg: any): string => isSolidityAddressable(arg) ? arg.getSolidityAddress() : arg;
        argToAdd = applyTransformationToArg(argToAdd, considerMappingSolidityAddressableToAddress);
      } else if (fInputDescription.type.startsWith('bytes') && !(argToAdd instanceof Uint8Array)) {
        const considerArrayifying = (arg: any): Uint8Array => arrayify(arg);
        argToAdd = applyTransformationToArg(argToAdd, considerArrayifying);
      } else if (shouldUseBigNumbers) {
        const toBigNumber = (arg: any): BigNumber => {
          if(arg instanceof Hbar) {
            return arg._valueInTinybar;
          }
          return arg instanceof BigNumber ? arg : new BigNumber(arg);
        }
        argToAdd = applyTransformationToArg(argToAdd, toBigNumber);
      }
      toReturn[fctCallName](argToAdd);
    }
    return toReturn;
  }

  private constructor() {
    super();
  }
}

export class ContractFunctionParametersParser extends Error {
  constructor(msg: string) {
    super(msg);
  }
}
