import { addTrashCan } from "./delete.js";

// ADD NEW TODO
const addNewToDo = () => {
  // console.log("add todo on click");
  let addNewToDoButton = document.getElementById("addToDoButton");

  addNewToDoButton.addEventListener("click", () => {
    let newToDoText = document.getElementById("newToDo").value;
    console.log("value: ", newToDoText);

    let newToDo = [
      {
        text: newToDoText,
        isComplete: false,
      },
    ];

    let itemTemplate = document.getElementById('toDoItem')
    let toDoList = document.getElementById('toDoList')
    toDoList.innerHTML += itemTemplate.innerHTML.replace('ITEM_TEXT', newToDoText)

    addTrashCan()
    
    clearInput();
  });

};

// RESET INPUT
const clearInput = () => {
  // SET INPUT TO EMPTY STRING
  document.getElementById("newToDo").value = "";
};

export { addNewToDo };