import Validator from '../Validator';
import {Obj} from '../../index';

export interface RequiredOptions {
  validator: 'required';
  params?: Obj;
  errorMessage?: string;
}

class RequiredValidator<V = unknown, E = string> extends Validator<V, E, Obj> {
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
    const valType = typeof this.value;

    if (valType === 'number' || valType === 'boolean') { // 0|false
      return true;
    } else if (typeof this.value === 'object') { // object needs 1 or more keys
      return Object.keys(this.value).length > 0;
    } else if (Array.isArray(this.value)) { // array needs 1 or more values
      return this.value.length > 0;
    }

    return Boolean(this.value);
  }
}

export default RequiredValidator;
