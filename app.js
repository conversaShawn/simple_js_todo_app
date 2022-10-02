console.log("js file works");

// mark todo as complete
// const markComplete = (singleStrikeOut) => {
//     let strikeout = document.querySelectorAll('.individualToDo')
    
//     strikeout.forEach(singelStrikeOut => {
//         singelStrikeOut.addEventListener('click', function() {
//         // classList.add('strikeout')
//         console.log('still working hopefully')
//         })
//     }) 
// }

// add event listener to all hardcoded todos
const incompleteTodo = () => {
    // get all todos
    let allToDos = document.querySelectorAll(".individualToDo")
    // loop through todos and addEventListener
    allToDos.forEach(singleToDo => {
        singleToDo.addEventListener('click', 
        function() {
            singleToDo.classList.add('strikeout')
            console.log('I clicked')
        })
        // markComplete)
    })
}
incompleteTodo()

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
  element.addEventListener('click', 
  function() {
    element.classList.add('strikeout')
    console.log('New todo clicked')
  });
// markComplete)



  document
    .getElementById("toDoList")
    .appendChild(element)
    .classList.add("individualToDo")
  console.log(element);

  clearInput();
};

// clear input
const clearInput = () => {
  console.log("clear input");
  document.getElementById("newToDo").value = "";
};

// add eventlistener to all incomplete todos


// delete todo
