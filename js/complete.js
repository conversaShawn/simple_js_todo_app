// ADD COMPLETE/INCOMPLETE BUTTON;
const completeToDo = () => {
  // console.log("it toggles");
  let addCheckBoxIcon = document.getElementsByClassName("reallyChecked");

  for (let i = 0; i < addCheckBoxIcon.length; i++) {
    addCheckBoxIcon[i].addEventListener("click", () => {
      let eventParent = addCheckBoxIcon[i].parentNode.childNodes;
      // console.log(addCheckBoxIcon[i].checked)
      eventParent[5].classList.toggle("markComplete");
    });
  }
};

export { completeToDo };
