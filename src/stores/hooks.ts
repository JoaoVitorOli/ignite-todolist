import { createTypedHooks } from "easy-peasy";
import { TodoStoreProps } from "./model";

const { 
  useStoreActions, 
  useStoreState, 
} = createTypedHooks<TodoStoreProps>();

export {
  useStoreActions,
  useStoreState,
}
