// ADD COMPLETE/INCOMPLETE BUTTON;
const completeToDo = () => {
  // console.log("it toggles");
  let addCheckBoxIcon = document.querySelectorAll(".reallyChecked");

  for (let i = 0; i < addCheckBoxIcon.length; i++) {
    let eventParent = addCheckBoxIcon[i].parentNode;
    // let reallyCheckedNode = eventParent.querySelector('.reallyChecked')
    addCheckBoxIcon[i].addEventListener("click", () => {
      if (eventParent.querySelector('.checkToDo').classList.contains("checkComplete")) {
        // console.log(addCheckBoxIcon[i]);
        // console.log(addCheckBoxIcon[i].checked);
        // console.log(eventParent);
        console.log(eventParent.querySelector('.reallyChecked').checked)
        eventParent.querySelector('.checkToDo').classList.remove("checkComplete")
        eventParent.querySelector('.toDoText').classList.remove("markComplete")
      } else {
      // if (reallyCheckedNode.checked) {
        // console.log(addCheckBoxIcon[i]);
        // eventParent.querySelector('.reallyChecked').checked = false
        // console.log(addCheckBoxIcon[i].checked);
        // console.log(eventParent);
        console.log(eventParent.querySelector('.reallyChecked').checked)
        eventParent.querySelector('.checkToDo').classList.add("checkComplete")
        eventParent.querySelector('.toDoText').classList.add("markComplete")
      }
    });
  }
};

export { completeToDo };
