import Misc, {MiscValidators} from './Misc';
import Types, {TypeValidators} from "./Types";

export type ValidatorOptions = MiscValidators | TypeValidators;

export default {
  ...Misc,
  ...Types
};
