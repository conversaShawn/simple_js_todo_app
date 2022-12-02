const saveToDo = () => {
  // console.log('content saveable')

  let saveDisk = document.querySelectorAll(".saveToDo");

  for (let i = 0; i < saveDisk.length; i++) {
    let saveNodes = saveDisk[i].parentNode.childNodes;
    // console.log(saveNodes);

    let saveText = saveNodes[5];
    // console.log(saveText.innerHTML);

    let editNodes = saveDisk[i].previousElementSibling;
    //   console.log(editNodes);
    saveDisk[i].addEventListener("click", () => {
      //   console.log('saves edits')

      editNodes.contentEditable = false;
      saveDisk[i].style.display = "none";
      editNodes.style.display = "block";
    });
  }
};

export { saveToDo };
