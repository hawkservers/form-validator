import StartsWithValidator, {StartsWithOptions} from "./StartsWithValidator";
import EmailValidator, {EmailOptions} from "./EmailValidator";
import IpValidator, {IpOptions} from "./IpValidator";

export type TextValidators = StartsWithOptions | EmailOptions | IpOptions;

export default {
  starts_with: StartsWithValidator,
  email: EmailValidator,
  ip: IpValidator
}