import RequiredValidator, {RequiredOptions} from './RequiredValidator';
import SizeValidator, {SizeOptions} from "./SizeValidator";
import RegexValidator, {RegexOptions} from "./RegexValidator";

export type MiscValidators = RequiredOptions | SizeOptions | RegexOptions;

export default {
  required: RequiredValidator,
  size: SizeValidator,
  regex: RegexValidator
};