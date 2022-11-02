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
    
    // // CREATE NEW TODO DIV
    // // store input text as variable
    // // create parent element
    // let element = document.createElement("li");
    // // create element
    // let toDoInput = document.createElement("div");
    // toDoInput.classList.add("testing");
    // // create text node
    // let textNode = document.createTextNode(newToDoText);
    // // append text to input
    // toDoInput.appendChild(textNode);
    // // append input to element
    // element.appendChild(toDoInput);

    // // create element
    // let checkbox = document.createElement("div");
    // checkbox.classList.add("checkToDo");
    // // prepend complete/incomplete button to element
    // element.prepend(checkbox);
    // element.prepend(controlCB);
    // // add event listener to complete/incomplete button
    // controlCB.addEventListener("click", (todo) => {
    //   // toggle class
    //   checkbox.parentElement.classList.toggle("markComplete");
    //   // checkbox.classList.toggle("markCompleteCheckBox");
    //   // console.log('toggles complete')
    // });

    // newToDoText === ""
    // ? alert("YOU MUST ENTER NEW TODO")
    // : document
    // .getElementById("toDoList")
    // .appendChild(element)
    // .classList.add("individualToDo");
    // console.log(element);
    // APPEND TEXT NODE TO TODO LIST OR THROW ERROR IF TEXT INPUT EMPTY
    clearInput();
  });

};
// addNewToDo();

// RESET INPUT
const clearInput = () => {
  // SET INPUT TO EMPTY STRING
  document.getElementById("newToDo").value = "";
};

export { addNewToDo };
