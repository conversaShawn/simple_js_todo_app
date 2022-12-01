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
    // isComplete: false,
  },
  {
    text: "Learn cypress",
    // isComplete: true,
  },
  {
    text: "Learn more cool things",
    // isComplete: false,
  },
];

let itemTemplate = document.getElementById("toDoItem");
let toDoList = document.getElementById("toDoList");
todos.forEach((todo) => {
  toDoList.innerHTML += itemTemplate.innerHTML.replace("ITEM_TEXT", todo.text);
});

// PUSH NEW TODO INTO todos OBJECT

editToDo();
saveToDo();
deleteToDo();
deleteAllToDos();
completeToDo();
completeAllToDos();

addNewToDo();
