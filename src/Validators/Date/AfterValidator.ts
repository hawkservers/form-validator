import Validator from "../Validator";

export interface AfterOptions {
  validator: 'after';
  params: AfterParams;
  errorMessage?: string;
}

interface AfterParams {
  date: Date;
  canEqual?: boolean;
}

class AfterValidator<V extends Date, E = string>
  extends Validator<V, E, AfterParams> {
  
  public readonly displayName = 'after';
  
  public field: string;
  public fullField: string;
  
  public value: V;
  public params: AfterParams;
  public readonly paramsOrder = <const>['date', 'canEqual'];
  
  get errorMessage(): string {
    return `%f has to be after ${this.params.date.getTime()}.`;
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
      return value.getTime() >= date.getTime();
    } else {
      return value.getTime() > date.getTime();
    }
  }
}

export default AfterValidator;