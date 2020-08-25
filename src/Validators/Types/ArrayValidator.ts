import Validator from "../Validator";
import {Obj} from "../../index";

export interface ArrayOptions {
  validator: 'array';
  params?: Obj;
  errorMessage?: string;
}

class ArrayValidator<V, E = string> extends Validator<V, E, Obj> {
  public readonly displayName = 'array';
  
  public field: string;
  public fullField: string;
  
  public value: V;
  public params: Obj;
  
  public errorMessage = '%f has to be an array.';
  
  test(): true | never {
    if (!this.tester()) {
      throw this.formatErrorMessage();
    }
    
    return true;
  }
  
  tester(): boolean {
    return (this.value instanceof Array);
  }
}

export default ArrayValidator;