import app from "../../Firebase config/Firebase";
import { getDatabase, ref, push } from "firebase/database";

export const Add_Todo = "Add_Todo";
export const Remove_Todo = "Remove_Todo";
export const Clear_Todo = "Clear_Todo";
export const Toggle_Todo = "Toggle_Todo";

export const addTodo = (data, description, userID) => {
  const newTodo = {
    data,
    description,
    id: new Date().getTime().toString(),
  };

  const todosRef = ref(getDatabase(app), `todos/${userID}`);
  push(todosRef, newTodo);

  return {
    type: Add_Todo,
    payload: newTodo,
  };
};

export const removeTodo = (id) => {
  return {
    type: Remove_Todo,
    id,
  };
};
export const clearTodo = () => {
  return {
    type: Clear_Todo,
  };
};
export const toggleTodo = (id) => {
  return {
    type: Toggle_Todo,
    id,
  };
};
