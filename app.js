console.log("js file works");

// mark complete
const toggleComplete = () => {
  // console.log("it toggles");
  // get parent node
  let completed = document.querySelector("ul");
  // add event listener
  completed.addEventListener("click", (todo) => {
    // target event listener and toggle class

    // "working... kinda"
    if (todo.target.tagName === "LI") {
      todo.target.classList.toggle("strikeout");
      console.log("dammit");
    }
  });
};
toggleComplete();

// add trash can icon;
const addTrashCan = () => {
  // console.log("it deletes");
  // get parent node
  let addTrashCanIcon = document.querySelectorAll("li");

  // add event listener
  addTrashCanIcon.forEach((singleTrashCan) => {
    let trashcan = document.createElement("div");
    trashcan.classList.add("testing");
    singleTrashCan.appendChild(trashcan);
    trashcan.addEventListener("click", () => {
      console.log("trash");
      trashcan.parentElement.style.display = "none";
    });
  });
};

addTrashCan();

// add todo
const addNewToDo = () => {
  // console.log("add todo on click");

  // store input text as variable
  let newToDoText = document.getElementById("newToDo").value;
  // create element
  let element = document.createElement("li");
  // create text node
  let textNode = document.createTextNode(newToDoText);
  // append text to element
  let trashcan = document.createElement("div");
  // trashcan.classList.add('testing')
  element.appendChild(textNode);
  element.appendChild(trashcan).classList.add("testing");
  trashcan.addEventListener("click", () => {
    console.log("trash");
    trashcan.parentElement.style.display = "none";
  });

  // append text node to todo list
  document
    .getElementById("toDoList")
    .appendChild(element)
    .classList.add("individualToDo");
  console.log(element);

  // add event listener to trash can

  clearInput();
};

// clear input
const clearInput = () => {
  console.log("clear input");
  document.getElementById("newToDo").value = "";
};
