// console.log("js file works");

import { addNewToDo } from "./js/add.js";
import { deleteToDo } from "./js/delete.js";
import { deleteAllToDos } from "./js/deleteAll.js";
import { editToDo } from "./js/edit.js";
import { saveToDo } from "./js/save.js";
import { completeToDo } from "./js/complete.js";
import { completeAllToDos } from "./js/completeAll.js";

// GENERATE STATIC TODO LIST
let todos = [
  {
    text: "Learn js",
    checked: false,
  },
  {
    text: "Learn cypress",
    checked: true,
  },
  {
    text: "Learn more cool things",
    checked: false,
  },
];

let itemTemplate = document.getElementById("toDoItem");
let toDoList = document.getElementById("toDoList");
todos.forEach((todo) => {
  toDoList.innerHTML += itemTemplate.innerHTML
  .replace("ITEM_TEXT", todo.text)
  .replace("INITIAL_CHECKED_VALUE", todo.checked)
  .replace("INITIAL_CHECKED_IMG", todo.checked ? "checkComplete" : "")
  .replace("INITIAL_CHECKED_STRIKEOUT", todo.checked ? "markComplete" : "")
});

// PUSH NEW TODO INTO todos OBJECT

editToDo();
saveToDo();
deleteToDo();
deleteAllToDos();
completeToDo();
completeAllToDos();

addNewToDo();
