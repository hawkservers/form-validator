import Validator from "../Validator";

export interface BeforeOptions {
  validator: 'before';
  params: BeforeParams;
  errorMessage?: string;
}

interface BeforeParams {
  date: Date;
  canEqual?: boolean;
}

class BeforeValidator<V extends Date, E = string>
  extends Validator<V, E, BeforeParams> {
  
  public readonly displayName = 'before';
  
  public field: string;
  public fullField: string;
  
  public value: V;
  public params: BeforeParams;
  
  get errorMessage(): string {
    return `%f has to be before ${this.params.date.toString()}.`;
  }
  
  test(): true | never {
    if (!this.tester()) {
      throw this.formatErrorMessage();
    }
    
    return true;
  }
  
  tester(): boolean {
    const {date, canEqual} = this.params;
    const value = this.value;
    
    if (canEqual) {
      return value <= date;
    } else {
      return value < date;
    }
  }
}

export default BeforeValidator;