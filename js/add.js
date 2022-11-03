import { deleteToDo } from "./delete.js";
import { editToDo } from "./edit.js";
import { saveToDo } from "./save.js";
import {completeToDo} from './complete.js'

// ADD NEW TODO
const addNewToDo = () => {
  let addNewToDoButton = document.getElementById("addToDoButton");

  addNewToDoButton.addEventListener("click", () => {
    let newToDoText = document.getElementById("newToDo").value;
    console.log("value: ", newToDoText);

    let itemTemplate = document.getElementById("toDoItem");
    let toDoList = document.getElementById("toDoList");

    newToDoText === ""
      ? alert("YOU MUST ENTER NEW TODO")
      : (toDoList.innerHTML += itemTemplate.innerHTML.replace(
          "ITEM_TEXT",
          newToDoText
        ));

    deleteToDo();
    editToDo()
    saveToDo()
    completeToDo()

    clearInput();
  });
};

// RESET INPUT
const clearInput = () => {
  // SET INPUT TO EMPTY STRING
  document.getElementById("newToDo").value = "";
};

export { addNewToDo };
