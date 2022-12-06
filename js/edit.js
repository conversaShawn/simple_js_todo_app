const editToDo = () => {
  let editPencil = document.querySelectorAll(".editToDo");

  for (let i = 0; i < editPencil.length; i++) {
    editPencil[i].addEventListener("click", () => {
      let parentLi = editPencil[i].closest(".individualToDo");

      let previousToDoText = parentLi.querySelector(".toDoText");

      let savePencil = parentLi.querySelector(".saveToDo");

      let newToDoTextInput = parentLi.querySelector(".savedToDoInput");

      previousToDoText.style.display = "none";
      newToDoTextInput.style.display = "block";
      newToDoTextInput.focus();
      newToDoTextInput.value = previousToDoText.textContent;
      editPencil[i].style.display = "none";
      savePencil.style.display = "block";
    });
  }
};

export { editToDo };
