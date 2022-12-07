import { addNewToDo } from "./js/add.js";
import { completeToDo } from "./js/complete.js";
import { completeAllToDos } from "./js/completeAll.js";
import { deleteToDo } from "./js/delete.js";
import { deleteAllToDos } from "./js/deleteAll.js";
import { editToDo } from "./js/edit.js";
import { saveToDo } from "./js/save.js";

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

// SET TODO[1] TO CHECKED
let itemTemplate = document.getElementById("toDoItemTemplate");
let toDoList = document.getElementById("toDoList");
todos.forEach((todo) => {
  toDoList.innerHTML += itemTemplate.innerHTML
    .replace("ITEM_TEXT", todo.text)
    .replace("INITIAL_CHECKED_VALUE", todo.checked)
    .replace("INITIAL_CHECKED_IMG", todo.checked ? "checkComplete" : "")
    .replace("INITIAL_CHECKED_STRIKEOUT", todo.checked ? "markComplete" : "");
});

addNewToDo();
completeToDo();
completeAllToDos();
deleteToDo();
deleteAllToDos();
editToDo();
saveToDo();
