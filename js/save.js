const saveToDo = () => {
  // console.log('content saveable')

  let saveDisk = document.getElementsByClassName("saveToDo");
  // let saveDisk = document.getElementsByClassName("saveToDo");

  for (let i = 0; i < saveDisk.length; i++) {
    saveDisk[i].addEventListener("click", () => {
      //   console.log('saves edits')
      let saveNodes = saveDisk[i].parentNode.childNodes;
      // console.log(saveNodes);

      let saveText = saveNodes[5];
      console.log(saveText.innerHTML);

      let editNodes = saveDisk[i].previousElementSibling;
      //   console.log(editNodes);

      editNodes.contentEditable = false;
      saveDisk[i].style.display = "none";
      editNodes.style.display = "block";
    });
  }
};

export { saveToDo };
