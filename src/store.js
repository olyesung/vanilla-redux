import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      //   const newToDoObj = { text: action.text, id: Date.now() };
      //   return [newToDoObj, ...state];
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      //   const cleaned = state.filter((toDo) => toDo.id !== action.id);
      //   return cleaned;
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
