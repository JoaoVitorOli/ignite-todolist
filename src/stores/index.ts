import { createStore, persist } from "easy-peasy";
import { TodoStoreProps } from "./model";
import { todo } from "./todos";

export const todoStore = createStore<TodoStoreProps>(
  persist(todo)
);