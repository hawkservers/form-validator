import Validator from '../Validator';
import {Obj} from '../../index';

export interface RequiredOptions {
  validator: 'required';
  params?: Obj;
  errorMessage?: string;
}

class RequiredValidator<V, E = string> extends Validator<V, E, Obj> {
  public displayName = 'required';

  public field: string;
  public fullField: string;

  public value: V;
  public params: Obj;

  public errorMessage = "%f is a required field.";

  public test(): true | never {
    if (!this.tester()) {
      throw this.formatErrorMessage();
    }

    return true;
  }

  public tester(): boolean {
    let typeTest = true;

    if (typeof this.value === 'object') {
      typeTest = Object.keys(this.value).length > 0;
    }

    return Boolean(this.value) && Number(this.value) !== 0 && typeTest;
  }
}

export default RequiredValidator;
