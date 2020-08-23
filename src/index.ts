import Validators, {ValidatorOptions as ValidOpt} from './Validators';
import Validator from './Validators/Validator';

export type Obj<T = unknown> = Record<string, T>;

export interface ValidationSchema {
  [key: string]: Array<ValidOpt['validator'] | ValidOpt | string>;
}

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

  test(): true {
    const errors = [];
    const schema = this.validationSchema


    // todo: nested validation rules
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
          errors.push(err);
        }
      });
    }

    if (errors.length > 0) {
      throw errors;
    }

    return true;
  }

  validatorStringSetup(
    validator: string, data: unknown, dataKey: string,
  ): Validator<unknown> {
    const [Val, paramString] = validator.split(':');
    const params = paramString.split(',');

    const ValInstance = new Validators[Val]();

    ValInstance.field = dataKey;

    ValInstance.value = data;
    ValInstance.params = params;

    return ValInstance
  }

  validatorObjectSetup(
    validator: ValidOpt, data: unknown, dataKey: string,
  ): Validator<unknown> {
    const ValInstance = new Validators[validator['validator'] as string]();

    ValInstance.field = dataKey;

    ValInstance.value = data;
    ValInstance.params = validator['params'];

    if (validator['errorMessage']) {
      ValInstance.errorMessage = validator['errorMessage'];
    }

    return ValInstance;
  }
}

