import Validator from "../Validator";
import {Obj} from "../../index";

const emailRegex = new RegExp('/^[a-zA-Z0-9.!#$%&’*+\\/=?^_`{|}~-]' +
  '{0,64}@(?=.{2,253}$)[a-zA-Z0-9-](?:.[a-zA-Z0-9-]+)*/');

export interface EmailOptions {
  validator: 'email';
  params?: Obj;
  errorMessage?: string;
}

class EmailValidator<V extends string, E = string>
  extends Validator<V, E, Obj> {

  public readonly displayName = 'email';

  public field: string;
  public fullField: string;

  public value: V;
  public params: Obj;

  public errorMessage = '%f has to be an email';

  test(): true | never {
    if (!this.tester()) {
      throw this.formatErrorMessage();
    }

    return true;
  }

  tester(): boolean {
    return emailRegex.test(this.value);
  }
}

export default EmailValidator;
