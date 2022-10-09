// console.log("js file works");

// TOGGLE COMPLETE/INCOMPLETE
const toggleComplete = () => {
  // console.log("it toggles");

  // get parent node
  let completed = document.querySelector("ul");
  // add event listener
  completed.addEventListener("click", (todo) => {
    // toggle class
    todo.target.tagName === "LI"
      ? todo.target.classList.toggle("markComplete")
      : false;
  });
};
toggleComplete();

// ADD DELETE BUTTON;
const addTrashCan = () => {
  // console.log("it deletes");

  // get parent node
  let addTrashCanIcon = document.querySelectorAll("li");

  // add event listener
  addTrashCanIcon.forEach((singleTrashCan) => {
    let trashcan = document.createElement("div");
    trashcan.classList.add("deleteToDo");
    singleTrashCan.appendChild(trashcan);
    trashcan.addEventListener("click", () => {
      // console.log("trash");
      trashcan.parentElement.style.display = "none";
    });
  });
};
addTrashCan();

// ADD NEW TODO
const addNewToDo = () => {
  // console.log("add todo on click");

  // CREATE NEW TODO DIV
  // store input text as variable
  let newToDoText = document.getElementById("newToDo").value;
  // create element
  let element = document.createElement("li");
  // create text node
  let textNode = document.createTextNode(newToDoText);
  // append text to element
  element.appendChild(textNode);

  // ADD DELETE BUTTON TO NEW TODO
  // create element
  let trashcan = document.createElement("div");
  // append delete button to element
  element.appendChild(trashcan).classList.add("deleteToDo");
  // add event listener to delete button
  trashcan.addEventListener("click", () => {
    // console.log("new todo trash");
    trashcan.parentElement.style.display = "none";
  });

  // APPEND TEXT NODE TO TODO LIST OR THROW ERROR IF TEXT INPUT EMPTY
  newToDoText === ""
    ? alert("YOU MUST ENTER NEW TODO")
    : document
        .getElementById("toDoList")
        .appendChild(element)
        .classList.add("individualToDo");
  // console.log(element);

  clearInput();
};

// RESET INPUT
const clearInput = () => {
  // console.log("clear input");
  // SET INPUT TO EMPTY STRING
  document.getElementById("newToDo").value = "";
};
