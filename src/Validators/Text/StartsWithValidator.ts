import Validator from "../Validator";

export interface StartsWithOptions {
  validator: 'starts_with';
  params: StartsWithParams;
  errorMessage?: string;
}

interface StartsWithParams {
  startWith: string | string[];
}

class StartsWithValidator<V extends string, E = string>
  extends Validator<V, E, StartsWithParams> {
  
  public readonly displayName = 'starts_with';
  
  public field: string;
  public fullField: string;
  
  public value: V;
  public params: StartsWithParams;
  
  get errorMessage(): string {
    const {startWith} = this.params;
    const txt = (startWith instanceof Array) ? startWith.join(', ') : startWith;
    
    return `%f has to start with ${txt}`;
  }
  
  test(): true | never {
    if (!this.tester()) {
      throw this.formatErrorMessage();
    }
    
    return true;
  }
  
  tester(): boolean {
    const value = this.value;
    const {startWith} = this.params;
    
    let valueStartsWith = false;
    if (startWith instanceof Array) {
      startWith.forEach((str) => {
        if (value.startsWith(str)) {
          valueStartsWith = true;
        }
      });
    } else {
      valueStartsWith = value.startsWith(startWith);
    }
    
    return valueStartsWith;
  }
}

export default StartsWithValidator;