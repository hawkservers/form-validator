import IntegerValidator, {IntegerOptions} from "./IntegerValidator";
import BooleanValidator, {BooleanOptions} from "./BooleanValidator";
import ArrayValidator, {ArrayOptions} from "./ArrayValidator";

export type TypeValidators = IntegerOptions | BooleanOptions | ArrayOptions;

export default {
  integer: IntegerValidator,
  boolean: BooleanValidator,
  array: ArrayValidator
};