import Validator from "../Validator";

export interface BetweenDateOptions {
  validator: 'between_date';
  params: BetweenDateParams;
  errorMessage?: string;
}

interface BetweenDateParams {
  from: Date;
  to: Date;
  canEqual?: boolean;
}

class BetweenDateValidator<V extends Date, E = string>
  extends Validator<V, E, BetweenDateParams> {
  
  public readonly displayName = 'between_date';
  
  public field: string;
  public fullField: string;
  
  public value: V;
  public params: BetweenDateParams;
  public readonly paramsOrder = <const>['from', 'to', 'canEqual'];
  
  get errorMessage(): string {
    return `%f has to be between (date 1) and (date 2)`;
  }
  
  test(): true | never {
    if (!this.tester()) {
      throw this.formatErrorMessage();
    }
    
    return true;
  }
  
  tester(): boolean {
    const {from, to, canEqual} = this.params;
    const value = this.value;
    
    if (canEqual) {
      return (value >= from) && (value <= to)
    } else {
      return (value > from) && (value < to);
    }
  }
}

export default BetweenDateValidator;