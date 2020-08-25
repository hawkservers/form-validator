import StartsWithValidator, {StartsWithOptions} from "./StartsWithValidator";
import EmailValidator, {EmailOptions} from "./EmailValidator";

export type TextValidators = StartsWithOptions | EmailOptions;

export default {
  starts_with: StartsWithValidator,
  email: EmailValidator
}