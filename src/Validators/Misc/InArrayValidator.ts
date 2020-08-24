import Validator from "../Validator";

export interface InArrayOptions {
  validator: 'in_array';
  params: InArrayParams<unknown>;
  errorMessage?: string;
}

interface InArrayParams<T> {
  arr: Array<T>;
}

class InArrayValidator<V, E = string>
  extends Validator<V, E, InArrayParams<V>> {
  
  public readonly displayName = 'in_array';
  
  public field: string;
  public fullField: string;
  
  public value: V;
  public params: InArrayParams<V>;
  
  public errorMessage = '%f field has to be in array.';
  
  test(): true | never {
    if (!this.tester()) {
      throw this.formatErrorMessage();
    }
    
    return true;
  }
  
  tester(): boolean {
    const {arr} = this.params;
    return arr.includes(this.value);
  }
}

export default InArrayValidator;