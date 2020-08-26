import Validator from "../Validator";

export interface RegexOptions {
  validator: 'regex';
  params: RegexParams;
  errorMessage?: string;
}

interface RegexParams {
  regexp: string | RegExp;
}

class RegexValidator<V, E = string> extends Validator<V, E, RegexParams> {
  public readonly displayName = 'regex';
  
  public field: string;
  public fullField: string;
  
  public value: V;
  public params: RegexParams;
  public readonly paramsOrder = ["regexp"] as const;
  
  public errorMessage = '%f does not match the regex pattern';
  
  test(): true | never {
    if (!this.tester()) {
      throw this.formatErrorMessage();
    }
    
    return true;
  }
  
  tester(): boolean {
    const regex = RegExp(this.params.regexp);
    const value = String(this.value);
    
    return regex.test(value);
  }
}

export default RegexValidator;