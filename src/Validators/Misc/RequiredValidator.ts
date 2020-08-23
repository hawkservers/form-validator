import Validator from '../Validator';

export interface RequiredOptions {
  validator: 'required';
  params: RequiredParams;
  errorMessage?: string;
}

interface RequiredParams {
  size?: number;
}

class RequiredValidator<V, E = string> extends Validator<V, E, RequiredParams> {
  public displayName = 'required';

  public field: string;
  public fullField: string;

  public value: V;
  public params: RequiredParams;

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
