console.log("js file works");

// mark complete
const toggleComplete = () => {
  // console.log("it toggles");
  // get parent node
  let completed = document.querySelector("ul");
  // add event listener
  completed.addEventListener("click", (todo) => {
    // target event listener and toggle class
    todo.target.classList.toggle("strikeout");
  });
};
toggleComplete();

delete complete;
const addTrashCan = () => {
  // console.log("it deletes");
  // get parent node
  let deleteToDo = document.querySelectorAll("li");

  // add event listener

  deleteToDo.forEach((st) => {
    let trashcan = document.createElement("div");
    trashcan.classList.add("testing");
    st.appendChild(trashcan);
    
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
  // append text node to todo list

  document
    .getElementById("toDoList")
    .appendChild(element)
    .classList.add("individualToDo");
  console.log(element);

  clearInput();
};

// clear input
const clearInput = () => {
  console.log("clear input");
  document.getElementById("newToDo").value = "";
};