const saveToDo = () => {
  let saveDisk = document.querySelectorAll(".saveToDo");

  for (let i = 0; i < saveDisk.length; i++) {
    let parentLi = saveDisk[i].closest(".individualToDo");

    let updatedToDoText = parentLi.querySelector(".toDoText");

    let editPencil = saveDisk[i]
      .closest(".individualToDo")
      .querySelector(".editToDo");

    let newToDoTextInput = parentLi.querySelector(".savedToDoInput");

    // SAVE EDITED TODO
    const saveWithEnterOrClick = () => {
      updatedToDoText.innerHTML = newToDoTextInput.value;
      editPencil.style.display = "block";
      updatedToDoText.style.display = "block";
      newToDoTextInput.style.display = "none";
      saveDisk[i].style.display = "none";
    };

    // SAVE EDITED TODO WITH CLICK
    saveDisk[i].addEventListener("click", () => {
      saveWithEnterOrClick();
    });

    // SAVE EDITED TODO WITH ENTER
    newToDoTextInput.addEventListener("keypress", (event) => {
      if (
        event.key === "Enter" &&
        document.getElementById("newToDo").value === ""
      ) {
        saveWithEnterOrClick();
      }
    });
  }
};

export { saveToDo };
