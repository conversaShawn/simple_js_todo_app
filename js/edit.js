const addPencil = () => {
    // console.log('content editable')
  
    let addEditIcons = document.querySelectorAll("li");
  
    addEditIcons.forEach((individualToDo) => {
      let toDoInput = document.createElement("div");
      toDoInput.classList.add("testing");
      toDoInput.innerText = "Learn js";
      individualToDo.appendChild(toDoInput);
      // let toDoInput = document.querySelectorAll('.testing')
  
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