import StartsWithValidator, {StartsWithOptions} from "./StartsWithValidator";
import EmailValidator, {EmailOptions} from "./EmailValidator";

export type TextOptions = StartsWithOptions | EmailOptions;

export default {
  starts_with: StartsWithValidator,
  email: EmailValidator
}