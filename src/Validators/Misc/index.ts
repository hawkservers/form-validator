import RequiredValidator, {RequiredOptions} from './RequiredValidator';
import SizeValidator, {SizeOptions} from "./SizeValidator";

export type MiscValidators = RequiredOptions | SizeOptions;

export default {
  required: RequiredValidator,
  size: SizeValidator
};
