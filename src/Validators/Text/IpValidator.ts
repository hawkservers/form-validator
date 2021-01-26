import Validator from "../Validator";
import {Obj} from "../../index";

const ipRegex = new RegExp(
  '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}' +
  '(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$'
);

export interface IpOptions {
  validator: 'ip';
  params?: Obj;
  errMessage?: string;
}

class IpValidator<V extends string, E = string> extends Validator<V, E, Obj> {
  public readonly displayName = 'ip';

  public field: string;
  public fullField: string;

  public value: V;
  public params: Obj;

  public errorMessage = '%f has to be an IP address.';

  test(): true | never {
    if (!this.tester()) {
      throw this.formatErrorMessage();
    }

    return true;
  }

  tester(): boolean {
    return ipRegex.test(this.value);
  }
}

export default IpValidator;
