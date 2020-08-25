import AfterValidator, {AfterOptions} from "./AfterValidator";
import BeforeValidator, {BeforeOptions} from "./BeforeValidator";
import BetweenDateValidator, {BetweenDateOptions} from "./BetweenDateValidator";

export type DateValidators = AfterOptions | BeforeOptions | BetweenDateOptions;

export default {
  after: AfterValidator,
  before: BeforeValidator,
  between_date: BetweenDateValidator
};