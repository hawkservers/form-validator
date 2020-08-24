import Validator from "../Validator";
import {Obj} from "../../index";

export interface BooleanOptions {
  validator: 'boolean';
  params?: Obj;
  errorMessage?: string;
}

type BoolTypes = string | number | boolean;
const validBooleans: BoolTypes[] = [true, false, "1", "0", 1, 0];

class BooleanValidator<V extends BoolTypes, E = string>
  extends Validator<V, E, Obj> {
  
  public readonly displayName = 'boolean';
  
  public field: string;
  public fullField: string;
  
  public value: V;
  public params: Obj;
  
  public errorMessage = '%f has to be a boolean.';
  
  test(): true | never {
    if (!this.tester()) {
      throw this.formatErrorMessage();
    }
    
    return true;
  }
  
  tester(): boolean {
    return validBooleans.includes(this.value);
  }
}

export default BooleanValidator;