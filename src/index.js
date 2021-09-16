import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App></App>, document.getElementById("root"));

//---------------✅ This is vanilla JS & Redux
// import { useLayoutEffect } from "react";
// import { createStore } from "redux";

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// const addToDo = (text) => {
//   return {
//     type: ADD_TODO,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE_TODO,
//     id,
//   };
// };

// const reducer = (state = [], action) => {
//   console.log(action);
//   switch (action.type) {
//     case ADD_TODO:
//       const newToDoObj = { text: action.text, id: Date.now() };
//       return [newToDoObj, ...state];
//     case DELETE_TODO:
//       const cleaned = state.filter((toDo) => toDo.id !== action.id);
//       return cleaned;
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));

// const dispatchAddToDo = (text) => {
//   store.dispatch(addToDo(text));
// };

// const dispatchDeleteToDo = (e) => {
//   const id = parseInt(e.target.parentNode.id);
//   store.dispatch(deleteToDo(id));
// };

// const paintToDos = () => {
//   const toDos = store.getState();
//   ul.innerHTML = "";
//   toDos.forEach((toDo) => {
//     const li = document.createElement("li");
//     const btn = document.createElement("button");
//     btn.innerText = "DEL";
//     btn.addEventListener("click", dispatchDeleteToDo);
//     li.id = toDo.id;
//     li.innerText = toDo.text;
//     console.log(li);
//     ul.appendChild(li);
//     li.appendChild(btn);
//   });
// };
// store.subscribe(paintToDos);

// const onSubmit = (e) => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = "";
//   dispatchAddToDo(toDo);
// };

// form.addEventListener("submit", onSubmit);

// -------- ✅vanilla는 로컬 저장소에 toDos[]어레이를 저장 또는 가져올 수 있다
//          하지만 리덕스는 더 좋은 방법을 가진다
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const toDos = [];

// const createToDo = (toDo) => {
//   const li = document.createElement("li");
//   li.innerText = toDo;
//   ul.appendChild(li);
// };

// const onSubmit = (e) => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = "";
//   createToDo(toDo);
// };

// form.addEventListener("submit", onSubmit);

// ------ ✅Just HTML
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const createToDo = (toDo) => {
//   const li = document.createElement("li");
//   li.innerText = toDo;
//   ul.appendChild(li);
// };

// const onSubmit = (e) => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = "";
//   createToDo(toDo);
// };

// form.addEventListener("submit", onSubmit);
