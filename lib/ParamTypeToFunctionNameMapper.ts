import { ParamType } from "@ethersproject/abi";

function upperCaseFirstOf(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export class ParamTypeToFunctionNameMapper {
  public constructor(private readonly paramType: ParamType) {}

  public map({ prefix = "" }) {
    const defTypeToTarget = this._geCanonicalTypeFor(this.paramType);

    return `${prefix}${this._getFunctionParticleFor(defTypeToTarget)}`;
  }

  /**
   * Retrieves the canonical value of the provided param type-definition such as an 'int256' whenever referencing its shorter form, 'int'.
   *   See {@link https://docs.soliditylang.org/en/v0.8.10/abi-spec.html#types} for a list of such mappings.
   */
  private _geCanonicalTypeFor(paramType: ParamType): string {
    if ("int" === paramType.type) return "int256";
    if ("int[]" === paramType.type) return "int256[]";
    if ("uint" === paramType.type) return "uint256";
    if ("uint[]" === paramType.type) return "uint256[]";
    return paramType.type;
  }

  /**
   * Given a type-name, it maps it to the Hedera Equivalent function-name expected value ready to be used in an actual SDK call
   * such as a 'get'-ing operation or an 'add'-ing one.
   *   Ex. 'uint256[]' would get mapped to 'Uint256Array' which, when 'add'-ing, would end up to be used as 'addUint256Array'.
   */
  private _getFunctionParticleFor(typeName: string): string {
    let functionParticle = upperCaseFirstOf(typeName);

    if (functionParticle.endsWith("[]")) {
      functionParticle = functionParticle.replace("[]", "Array");
    }
    return functionParticle;
  }
}
