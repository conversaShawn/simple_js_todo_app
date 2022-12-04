const saveToDo = () => {
  // console.log('content saveable')

  let saveDisk = document.querySelectorAll(".saveToDo");

  for (let i = 0; i < saveDisk.length; i++) {
    // TRY USING QUERYSELECTOR TO FIND CHILDNODES
    // .closest('.individualToDo') or whatever I'm looking for
    let saveNodes = saveDisk[i].parentNode.childNodes;
    // console.log(saveNodes);

    let saveText = saveNodes[5];

    let editNodes = saveDisk[i].previousElementSibling;

    // UPDATE TEXT FOR SAVED VALUE
    let newToDoText = saveNodes[7];

    //   console.log(editNodes);
    //   console.log('saves edits')
    const saveWithEnterOrClick = () => {
      // console.log(saveText.innerHTML);
      // console.log("text: ", newToDoText.value);
      // console.log("text: ", saveText);
      saveText.innerHTML = newToDoText.value;
      newToDoText.style.display = "none";
      // editNodes.contentEditable = false;
      // editNodes = newToDoText.value;
      saveDisk[i].style.display = "none";
      editNodes.style.display = "block";
      saveText.style.display = "block";
    };

    saveDisk[i].addEventListener("click", () => {
      saveWithEnterOrClick();
    });

    newToDoText.addEventListener("keypress", (event) => {
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
