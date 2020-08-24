import IntegerValidator, {IntegerOptions} from "./IntegerValidator";
import BooleanValidator, {BooleanOptions} from "./BooleanValidator";

export type TypeValidators = IntegerOptions | BooleanOptions;

export default {
  integer: IntegerValidator,
  boolean: BooleanValidator
};