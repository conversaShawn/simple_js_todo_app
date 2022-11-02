// console.log("js file works");

import { addNewToDo } from "./js/add.js";
import { deleteToDo } from "./js/delete.js";
import { deleteAllToDos } from "./js/deleteAll.js";

// GENERATE STATIC TODO LIST
let todos = [
  {
    text: "Learn js",
    isComplete: false,
  },
  {
    text: "Learn cypress",
    isComplete: true,
  },
  {
    text: "Learn more cool things",
    isComplete: false,
  },
];

let itemTemplate = document.getElementById("toDoItem");
let toDoList = document.getElementById("toDoList");
todos.forEach((todo) => {
  toDoList.innerHTML += itemTemplate.innerHTML.replace("ITEM_TEXT", todo.text);
});

// PUSH NEW TODO INTO todos OBJECT

// ADD EDIT BUTTON
// const addPencil = () => {
//   // console.log('content editable')

//   let addEditIcons = document.querySelectorAll("li");

//   addEditIcons.forEach((individualToDo) => {
//     let toDoInput = document.createElement("div");
//     // toDoInput.classList.add("testing");
//     // toDoInput.innerText = "Learn js";
//     // individualToDo.appendChild(toDoInput);

//     let pencil = document.createElement("div");
//     pencil.classList.add("editToDo");
//     individualToDo.appendChild(pencil);
//     pencil.addEventListener("click", () => {
//       toDoInput.contentEditable = true;
//       toDoInput.focus();
//       pencil.style.display = "none";
//       saveButton.style.display = "block";
//       // console.log("pencil click");
//     });
//     let saveButton = document.createElement("div");
//     saveButton.classList.add("saveToDo");
//     individualToDo.appendChild(saveButton);
//     saveButton.style.display = "none";
//     saveButton.addEventListener("click", () => {
//       toDoInput.contentEditable = false;
//       saveButton.style.display = "none";
//       pencil.style.display = "block";
//       // console.log('save clicked')
//     });
//   });
// };
// addPencil();

deleteToDo();

// ADD COMPLETE/INCOMPLETE BUTTON;
// const addCheckBox = () => {
//   // console.log("it toggles");

//   //

//   // get parent node
//   let addCheckBoxIcon = document.querySelectorAll("li");

//   // TOGGLE COMPLETE/INCOMPLETE
//   addCheckBoxIcon.forEach((singleCheckBox) => {
//     // create checkBox before div
//     let controlCB = document.createElement("input");
//     controlCB.type = "checkbox";
//     controlCB.classList.add("reallyChecked");

//     let checkbox = document.createElement("div");
//     checkbox.classList.add("checkToDo");
//     singleCheckBox.prepend(checkbox);
//     singleCheckBox.prepend(controlCB);
//     controlCB.addEventListener("click", () => {
//       // toggle class
//       checkbox.parentElement.classList.toggle("markComplete");
//       checkbox.classList.toggle("markCompleteCheckBox");
//       // console.log("clicks");
//     });
//   });
// };
// addCheckBox();

// ADD NEW TODO
// const addNewToDo = () => {
//   // console.log("add todo on click");

// let addNewToDoButton = document.getElementById('addToDoButton')
// // CREATE NEW TODO DIV
// // store input text as variable
// let newToDoText = document.getElementById("newToDo").value;
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

// // ADD EDIT BUTTON TO NEW TODO
// // create edit element
// let pencil = document.createElement("div");
// pencil.classList.add("editToDo");
// // append edit button to element
// element.appendChild(pencil);

// // create save element
// let saveButton = document.createElement("div");
// saveButton.classList.add("saveToDo");
// saveButton.style.display = "none";
// // append save button to element
// element.appendChild(saveButton);

// // add event listener to edit button
// pencil.addEventListener("click", () => {
//   toDoInput.contentEditable = true;
//   toDoInput.focus();
//   pencil.style.display = "none";
//   saveButton.style.display = "block";
//   // console.log("pencil click");
// });

// // add event listener to save button
// saveButton.addEventListener("click", () => {
//   toDoInput.contentEditable = false;
//   saveButton.style.display = "none";
//   pencil.style.display = "block";
//   // console.log("save click");
// });

// // ADD DELETE BUTTON TO NEW TODO
// // create element
// let trashcan = document.createElement("div");
// // append delete button to element
// element.appendChild(trashcan).classList.add("deleteToDo");
// // add event listener to delete button
// trashcan.addEventListener("click", () => {
//   // console.log("new todo trash");
//   trashcan.parentElement.remove();
// });

// // ADD COMPLETE/INCOMPLETE TO NEW TODO
// // create checkBox before div
// let controlCB = document.createElement("input");
// controlCB.type = "checkbox";
// controlCB.classList.add("reallyChecked");

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

// // APPEND TEXT NODE TO TODO LIST OR THROW ERROR IF TEXT INPUT EMPTY
// addNewToDoButton.addEventListener('click', () => {

//   newToDoText === ""
//   ? alert("YOU MUST ENTER NEW TODO")
//   : document
//   .getElementById("toDoList")
//   .appendChild(element)
//   .classList.add("individualToDo");
//   // console.log(element);
// })
// addNewToDo()

//   clearInput();
// };
addNewToDo();

// RESET INPUT
// const clearInput = () => {
//   // console.log("clear input");
//   // SET INPUT TO EMPTY STRING
//   document.getElementById("newToDo").value = "";
// };

// COMPLETE ALL
// const completeAll = (event) => {
//   console.log("complete");
//   // CHECKED OR NOT CHECKED?
//   console.log(event.target.checked);

//   // let completeAllButton = document.getElementById("completeAllButton");

//   let allStrikeThrough = document.querySelectorAll("li");
//   allStrikeThrough.forEach((singleRC) => {
//     if (!singleRC.classList.contains("markComplete")) {
//       singleRC.classList.add("markComplete");
//     } else if (!event.target.checked) {
//       singleRC.classList.remove("markComplete");
//       // singleRC.checked = false
//     }
//   });
//   // console.log(allStrikeThrough);

//   // TARGET .REALLYCHECKED AND ALLOW CSS TO UPDATE STYLES

//   let allReallyChecked = document.querySelectorAll(".reallyChecked");
//   // allReallyChecked.forEach(singleRC => singleRC.classList.toggle('markCompleteCheckBox'))
//   allReallyChecked.forEach((singleRC) => {
//     console.log(singleRC.checked);
//     if (!singleRC.checked) {
//       singleRC.checked = true;
//     } else if (!event.target.checked) {
//       singleRC.checked = false;
//     }
//   });

//   // console.log(allReallyChecked);
// };

deleteAllToDos();
