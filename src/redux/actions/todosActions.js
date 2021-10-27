import { ADD_TODO, REMOVE_TODO, MARK_TODO_COMPLETE, MARK_TODO_INCOMPLETE } from "../types";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const markTodoAsComplete = (id) => {
  return {
    type: MARK_TODO_COMPLETE,
    payload: id,
  };
};

export const markTodoAsIncomplete = (id) => {
  return {
    type: MARK_TODO_INCOMPLETE,
    payload: id,
  };
};
