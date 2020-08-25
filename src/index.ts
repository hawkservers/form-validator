import Validators, {ValidatorOptions as ValidOpt} from './Validators';
import Validator from './Validators/Validator';

export type Obj<T = unknown> = Record<string, T>;

export interface ValidationSchema {
  [key: string]: Array<ValidOpt['validator'] | ValidOpt | string>;
}

type ErrorsMap = {
  [key in ValidOpt["validator"]]?: string[];
};

export default class FormValidator<D extends Obj> {
  public data: D;
  public validationSchema: ValidationSchema;

  constructor(data: D, schema: ValidationSchema) {
    this.data = data;
    this.validationSchema = schema;
  }

  static validate<D extends Obj>(data: D, schema: ValidationSchema):
    FormValidator<D> {
    return new FormValidator<D>(data, schema);
  }

  test(): true | never {
    const schema = this.validationSchema

    const errors: ErrorsMap = {};
    for (const dataKey in schema) {
      if (!Object.prototype.hasOwnProperty.call(schema, dataKey,)) {
        continue;
      }
      
      const data = this.data[dataKey];
      const validators = schema[dataKey];

      if (!validators) {
        continue;
      }

      const madeValidators = validators.map((validator) => {
        if (typeof validator === "string") {
          return this.validatorStringSetup(validator, data, dataKey)
        } else {
          return this.validatorObjectSetup(validator, data, dataKey);
        }
      });

      madeValidators.forEach((validator: Validator<unknown>) => {
        try {
          validator.test();
        } catch (err) {
          (errors[dataKey] ||= []).push(err);
        }
      });
    }

    if (Object.keys(errors).length > 0) {
      throw errors;
    }

    return true;
  }

  validatorStringSetup(
    validator: string, data: unknown, dataKey: string,
  ): Validator<unknown> {
    const [val, paramString] = validator.split(':');
    
    const valInstance = new Validators[val];
    valInstance.field = dataKey;
    valInstance.value = data;
    
    const params = {};
    if (paramString && valInstance.paramsOrder) {
      const unassignedParams = paramString.split(',');
      
      for (let i = 0; i < unassignedParams.length; i++) {
        // Disallow the params to exceed the number of params on the validator
        const paramName = valInstance.paramsOrder[i];
        if (!paramName) continue;

        params[paramName] = unassignedParams[i];
      }
    }
    
    valInstance.params = params;
    
    return valInstance;
  }

  validatorObjectSetup(
    validator: ValidOpt, data: unknown, dataKey: string,
  ): Validator<unknown> {
    const valInstance = new Validators[validator['validator'] as string]();
  
    valInstance.field = dataKey;
  
    valInstance.value = data;
    valInstance.params = validator['params'];

    if (validator['errorMessage']) {
      valInstance.errorMessage = validator['errorMessage'];
    }

    return valInstance;
  }
}