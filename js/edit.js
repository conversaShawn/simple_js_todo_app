const editToDo = () => {
  // console.log('content editable')

  let editPencil = document.querySelectorAll(".editToDo");

  for (let i = 0; i < editPencil.length; i++) {
    editPencil[i].addEventListener("click", () => {
      let editNodes = editPencil[i].parentNode.childNodes;
      console.log(editNodes);

      let editText = editNodes[5];
      // console.log(editText);

      let saveNodes = editPencil[i].nextElementSibling;
      // console.log(saveNodes);

      let newToDoText = editNodes[7];

      // editText.contentEditable = true;
      editText.style.display = "none";
      newToDoText.style.display = "block";
      newToDoText.focus();
      newToDoText.value = editText.textContent;
      // editText.focus();
      editPencil[i].style.display = "none";
      saveNodes.style.display = "block";
    });
  }
};

export { editToDo };
