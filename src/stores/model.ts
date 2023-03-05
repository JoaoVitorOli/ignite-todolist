import { Action } from "easy-peasy";

export type TodoProps = {
  id: string;
  title: string;
  isFinished: boolean;
}

export interface TodoStoreProps {
  todos: TodoProps[];
  addTodo: Action<TodoStoreProps, TodoProps>
  removeTodo: Action<TodoStoreProps, string>
  checkTodo: Action<TodoStoreProps, string>
}