import { deleteToDo } from "./delete.js";
import { editToDo } from "./edit.js";
import { saveToDo } from "./save.js";
import { completeToDo } from "./complete.js";

const addNewToDo = () => {
  let addNewToDoButton = document.getElementById("addToDoButton");

  // ADD NEW TODO
  const addWithClickOrEnter = () => {
    let newToDoText = document.getElementById("newToDo").value;

    let toDoItemTemplate = document.getElementById("toDoItem");
    let toDoList = document.getElementById("toDoList");

    let addCheckBoxIcon = (document.getElementsByClassName(
      "reallyChecked"
    ).checked = true);
    console.log(addCheckBoxIcon);

    newToDoText === ""
      ? alert("YOU MUST ENTER NEW TODO")
      : (toDoList.innerHTML += toDoItemTemplate.innerHTML.replace(
          "ITEM_TEXT",
          newToDoText
        ));

    deleteToDo();
    editToDo();
    saveToDo();
    completeToDo();

    clearInput();
  };

  // ADD NEW TODO WITH CLICK
  addNewToDoButton.addEventListener("click", () => {
    addWithClickOrEnter();
  });

  // ADD NEW TODO WITH ENTER
  document.addEventListener("keypress", (event) => {
    if (
      event.key === "Enter" &&
      document.getElementById("newToDo").value !== ""
    ) {
      addWithClickOrEnter();
    }
  });
};

// RESET INPUT
const clearInput = () => {
  // SET INPUT TO EMPTY STRING
  document.getElementById("newToDo").value = "";
};

export { addNewToDo };
