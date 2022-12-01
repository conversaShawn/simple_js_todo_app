// ADD COMPLETE/INCOMPLETE BUTTON;
const completeToDo = () => {
  // console.log("it toggles");
  let addCheckBoxIcon = document.getElementsByClassName("reallyChecked");

  for (let i = 0; i < addCheckBoxIcon.length; i++) {
    addCheckBoxIcon[i].addEventListener("click", () => {
      let eventParent = addCheckBoxIcon[i].parentNode.childNodes;
      // console.log(addCheckBoxIcon[i].checked)
      // eventParent[5].classList.toggle("markComplete");
      // eventParent[3].classList.toggle("checkComplete");
      if (addCheckBoxIcon[i].checked) {
        addCheckBoxIcon[i].checked = true;
        console.log(addCheckBoxIcon[i].checked)
        eventParent[5].classList.add("markComplete");
        eventParent[3].classList.add("checkComplete")
      }
      else {
      //   // console.log(completeAllButton.checked)
        addCheckBoxIcon[i].checked = false; //= !addCheckBoxIcon[i].checked;
        console.log(addCheckBoxIcon[i].checked)
        eventParent[5].classList.remove("markComplete");
        eventParent[3].classList.remove("checkComplete");
      }
    });
  }
  // for (let i = 0; i < addCheckBoxIcon.length; i++) {
  //   addCheckBoxIcon[i].addEventListener("click", () => {
  //     let eventParent = addCheckBoxIcon[i].parentNode.childNodes;
  //     // console.log(addCheckBoxIcon[i].checked)
  //     eventParent[5].classList.toggle("markComplete");
  //     eventParent[3].classList.toggle("checkComplete");
      
  //   });
  // }
};

export { completeToDo };
