import RequiredValidator, {RequiredOptions} from './RequiredValidator';
import SizeValidator, {SizeOptions} from "./SizeValidator";
import RegexValidator, {RegexOptions} from "./RegexValidator";
import InArrayValidator, {InArrayOptions} from "./InArrayValidator";

export type MiscValidators = RequiredOptions | SizeOptions | RegexOptions |
  InArrayOptions;

export default {
  required: RequiredValidator,
  size: SizeValidator,
  regex: RegexValidator,
  in_array: InArrayValidator
};