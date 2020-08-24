import Misc, {MiscValidators} from './Misc';
import Types, {TypeValidators} from "./Types";
import Text, {TextOptions} from "./Text";

export type ValidatorOptions = MiscValidators | TypeValidators | TextOptions;

export default {
  ...Misc,
  ...Types,
  ...Text
};