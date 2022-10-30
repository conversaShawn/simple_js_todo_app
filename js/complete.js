// ADD COMPLETE/INCOMPLETE BUTTON;
const addCheckBox = () => {
    // console.log("it toggles");
  
    //
  
    // get parent node
    let addCheckBoxIcon = document.querySelectorAll("li");
  
    // TOGGLE COMPLETE/INCOMPLETE
    addCheckBoxIcon.forEach((singleCheckBox) => {
      // create checkBox before div
      let controlCB = document.createElement("input");
      controlCB.type = "checkbox";
      controlCB.classList.add("reallyChecked");
  
      let checkbox = document.createElement("div");
      checkbox.classList.add("checkToDo");
      singleCheckBox.prepend(checkbox);
      singleCheckBox.prepend(controlCB);
      controlCB.addEventListener("click", () => {
        // toggle class
        checkbox.parentElement.classList.toggle("markComplete");
        checkbox.classList.toggle("markCompleteCheckBox");
        // console.log("clicks");
      });
    });
  };
  addCheckBox();