const editToDo = () => {
  // console.log('content editable')

  let editPencil = document.getElementsByClassName("editToDo");
  // let saveDisk = document.getElementsByClassName("saveToDo");

  for (let i = 0; i < editPencil.length; i++) {
    editPencil[i].addEventListener("click", () => {
      let editNodes = editPencil[i].parentNode.childNodes;
      // console.log(editNodes);

      let editText = editNodes[5];
      // console.log(editText);

      let saveNodes = editPencil[i].nextElementSibling;
      // console.log(saveNodes);

      editText.contentEditable = true;
      editText.focus();
      editPencil[i].style.display = "none";
      saveNodes.style.display = "block";
    });
  }
};

export { editToDo };
