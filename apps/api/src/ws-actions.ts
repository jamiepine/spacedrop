import { wsActions as accountActions } from "./modules/accounts";
import { wsActions as uploadActions } from "./modules/uploads";

export default {
  ...accountActions,
  ...uploadActions
}