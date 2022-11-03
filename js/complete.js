// ADD COMPLETE/INCOMPLETE BUTTON;
const completeToDo = () => {
    // console.log("it toggles");
  
    //
  
    // get parent node
    let addCheckBoxIcon = document.getElementsByClassName('reallyChecked');
  
    for (let i = 0; i < addCheckBoxIcon.length; i++) {
      addCheckBoxIcon[i].addEventListener("click", (event) => {
        // if (trashcans.length) {
        //   event.target.parentNode.remove();
        //   console.log("how many left: ", trashcans.length);
        // } 
        if (!event.target.classList.contains("markComplete")) {
          event.target.classList.add("markComplete");
        } else if (!event.target.checked) {
          event.target.classList.remove("markComplete");
          // singleRC.checked = false
        }
      });
    }

    // TOGGLE COMPLETE/INCOMPLETE
    // addCheckBoxIcon.forEach((singleCheckBox) => {
      // create checkBox before div
      // let controlCB = document.createElement("input");
      // controlCB.type = "checkbox";
      // controlCB.classList.add("reallyChecked");
  
      // let checkbox = document.createElement("div");
      // checkbox.classList.add("checkToDo");
      // singleCheckBox.prepend(checkbox);
      // singleCheckBox.prepend(controlCB);
      // controlCB.addEventListener("click", () => {
      //   // toggle class
      //   checkbox.parentElement.classList.toggle("markComplete");
      //   console.log(checkbox.parentElement.classList)
      //   checkbox.classList.toggle("markCompleteCheckBox");
      //   // console.log("clicks");
      // });
    // });

  };

  export {completeToDo}