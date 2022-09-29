console.log('js file works')

// add todo
const addNewToDo = () => {
console.log('add todo on click')
// store input text as variable 
let newToDoText = document.getElementById('newToDo').value
// create element
let element = document.createElement('li')
// create text node
let textNode = document.createTextNode(newToDoText)
// append text to element
element.appendChild(textNode)
// append text node to todo list
document.getElementById('toDoList').appendChild(element).classList.add('individualToDo')
console.log(element)
clearInput()
}

// clear input
const clearInput = () => {
    document.getElementById('newToDo').value = ""
}

// mark todo as complete

// delete todo