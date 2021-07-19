import { wsActions as accountActions } from "./modules/accounts";
import { wsActions as clientActions } from "./modules/clients";
import { wsActions as uploadActions } from "./modules/uploads";

export default {
  ...accountActions,
  ...clientActions,
  ...uploadActions
}