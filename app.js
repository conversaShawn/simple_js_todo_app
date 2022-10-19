// console.log("js file works");

// ADD EDIT BUTTON
const addPencil = () => {
  // console.log('content editable')

  let addEditIcons = document.querySelectorAll("li");

  addEditIcons.forEach((individualToDo) => {
    let toDoInput = document.createElement("div");
    toDoInput.classList.add("testing");
    toDoInput.innerText = "Learn js"
    individualToDo.appendChild(toDoInput)

    let pencil = document.createElement("div");
    pencil.classList.add("editToDo");
    individualToDo.appendChild(pencil);
    pencil.addEventListener("click", () => {
      toDoInput.contentEditable = true;
      toDoInput.focus();
      pencil.style.display = "none";
      saveButton.style.display = "block";
      // console.log("pencil click");
    });
    let saveButton = document.createElement("div");
    saveButton.classList.add("saveToDo");
    individualToDo.appendChild(saveButton);
    saveButton.style.display = "none";
    saveButton.addEventListener("click", () => {
      toDoInput.contentEditable = false;
      saveButton.style.display = "none";
      pencil.style.display = "block";
      // console.log('save clicked')
    });
  });
};
addPencil();

// ADD DELETE BUTTON;
const addTrashCan = () => {
  // console.log("it deletes");

  // get parent node
  let addTrashCanIcon = document.querySelectorAll("li");

  // DELETE
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

// ADD COMPLETE/INCOMPLETE BUTTON;
const addCheckBox = () => {
  // console.log("it toggles");

// 


  // get parent node
  let addCheckBoxIcon = document.querySelectorAll("li");

  // TOGGLE COMPLETE/INCOMPLETE
  addCheckBoxIcon.forEach((singleCheckBox) => {
// create checkBox before div
let controlCB = document.createElement('input')
controlCB.type = "checkbox"
controlCB.classList.add('reallyChecked')

    let checkbox = document.createElement("div");
    checkbox.classList.add("checkToDo");
    singleCheckBox.prepend(checkbox);
    singleCheckBox.prepend(controlCB)
    // checkbox.addEventListener("click", () => {
    //   // toggle class
    //   checkbox.parentElement.classList.toggle("markComplete");
    //   checkbox.classList.toggle("markCompleteCheckBox");
    //   // console.log("clicks");
    // });
  });
};
addCheckBox();

// ADD NEW TODO
const addNewToDo = () => {
  // console.log("add todo on click");

  // CREATE NEW TODO DIV
  // store input text as variable
  let newToDoText = document.getElementById("newToDo").value;
  // create parent element
  let element = document.createElement("li");
  // create element
  let toDoInput = document.createElement("div");
  toDoInput.classList.add("testing");
  // create text node
  let textNode = document.createTextNode(newToDoText);
  // append text to input
  toDoInput.appendChild(textNode);
  // append input to element
  element.appendChild(toDoInput);

  // ADD EDIT BUTTON TO NEW TODO
  // create edit element
  let pencil = document.createElement("div");
  pencil.classList.add("editToDo");
  // append edit button to element
  element.appendChild(pencil);

  // create save element
  let saveButton = document.createElement("div");
  saveButton.classList.add("saveToDo");
  saveButton.style.display = "none";
  // append save button to element
  element.appendChild(saveButton);

  // add event listener to delete button
  pencil.addEventListener("click", () => {
    toDoInput.contentEditable = true;
    toDoInput.focus();
    pencil.style.display = "none";
    saveButton.style.display = "block";
    // console.log("pencil click");
  });

  // add event listener to delete button
  saveButton.addEventListener("click", () => {
    toDoInput.contentEditable = false;
    saveButton.style.display = "none";
    pencil.style.display = "block";
    // console.log("save click");
  });

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

  // ADD COMPLETE/INCOMPLETE TO NEW TODO
  // create element
  let checkbox = document.createElement("div");
  checkbox.classList.add("checkToDo");
  // prepend complete/incomplete button to element
  element.prepend(checkbox);
  // add event listener to complete/incomplete button
  checkbox.addEventListener("click", (todo) => {
    // toggle class
    checkbox.parentElement.classList.toggle("markComplete");
    checkbox.classList.toggle("markCompleteCheckBox");
    // console.log('toggles complete')
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