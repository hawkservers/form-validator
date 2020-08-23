import Validator from "../Validator";

export interface SizeOptions {
  validator: 'size';
  params: SizeParams;
  errorMessage?: string;
}

interface SizeParams {
  size: number;
}

class SizeValidator<V, E = string> extends Validator<V, E, SizeParams> {
  public readonly displayName = 'size';
  
  public field: string;
  public fullField: string;
  
  public value: V;
  public params: SizeParams;
  
  public errorMessage = `%f needs to have the correct size.`;
  
  public test(): true | never {
    if (!this.tester()) {
      throw this.formatErrorMessage();
    }
    
    return true;
  }
  
  public tester(): boolean {
    const size = this.params.size;
    const value = this.value;
    
    let valueSize;
    if (typeof value === 'object') {
      valueSize = Object.keys(value).length;
    } else if (typeof value === 'number') {
      valueSize = value;
    } else if (typeof value === 'string' || value instanceof Array) {
      valueSize = value.length;
    }
    
    return size === valueSize;
  }
}

export default SizeValidator;