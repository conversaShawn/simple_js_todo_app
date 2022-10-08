console.log("js file works");

// const toggleComplete = () => {
//   // get all todos
//   let allToDos = document.querySelectorAll(".individualToDo");
//   // loop through todos and addEventListener
//   console.log(allToDos);
//   allToDos.forEach((singleToDo) => {
//     singleToDo.addEventListener("click", function () {
//       singleToDo.classList.toggle("strikeout");
//     });
//   });
// };
// toggleComplete();

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

// add todo
const addNewToDo = () => {
  console.log("add todo on click");
  // store input text as variable
  let newToDoText = document.getElementById("newToDo").value;
  // create element
  let element = document.createElement("li");
  // create text node
  let textNode = document.createTextNode(newToDoText);
  // append text to element
  element.appendChild(textNode);
  // append text node to todo list
  document
    .getElementById("toDoList")
    .appendChild(element)
    .classList.add("individualToDo");
  console.log(element);
// all event listener to all new todos
// element.addEventListener('click', () => {
//   element.classList.toggle('strikeout')
// })

  clearInput();
};

// clear input
const clearInput = () => {
  console.log("clear input");
  document.getElementById("newToDo").value = "";
};

// add eventlistener to all incomplete todos

// delete todo
let points = (a, b, c = a * 2 + b * 3) => c;
