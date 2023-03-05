import { action } from "easy-peasy";

import { TodoStoreProps } from './model';

export const todo: TodoStoreProps = {
  todos: [],

  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),

  removeTodo: action((state, payload) => {
    const todosFiltered = state.todos.filter(todo => todo.id !== payload);

    state.todos = todosFiltered;
  }),

  checkTodo: action((state, payload) => {
    const todosFiltered = state.todos.map(todo => {
      if (todo.id === payload) {
        return {
          id: todo.id,
          title: todo.title,
          isFinished: !todo.isFinished
        }
      }

      return todo;
    });

    state.todos = todosFiltered;
  }),
};