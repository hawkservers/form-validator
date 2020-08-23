import Validator from "../Validator";
import {Obj} from "../../index";

export interface IntegerOptions {
  validator: 'integer';
  params?: Obj;
  errorMessage?: string;
}

type IntTypes = string | number;

class IntegerValidator<V = IntTypes, E = string> extends Validator<V, E, Obj> {
  public displayName = 'integer';
  
  public field: string;
  public fullField: string;
  
  public value: V;
  public params: Obj;
  
  public errorMessage = "%f field has to be an integer.";
  
  public test(): true | never {
    if (!this.tester()) {
      throw this.formatErrorMessage();
    }
    
    return true;
  }
  
  public tester(): boolean {
    if (typeof this.value === 'number') return true;
    
    return !isNaN(Number(this.value));
  }
}

export default IntegerValidator;