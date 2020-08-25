import Misc, {MiscValidators} from './Misc';
import Types, {TypeValidators} from "./Types";
import Text, {TextValidators} from "./Text";
import Date, {DateValidators} from "./Date";

export type ValidatorOptions = MiscValidators | TypeValidators |
  TextValidators | DateValidators;

export default {
  ...Misc,
  ...Types,
  ...Text,
  ...Date
};