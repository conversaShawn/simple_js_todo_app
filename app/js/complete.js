const completeToDo = () => {
  let addCheckBoxIcon = document.querySelectorAll(".reallyChecked");

  for (let i = 0; i < addCheckBoxIcon.length; i++) {
    let eventParent = addCheckBoxIcon[i].parentNode;
    addCheckBoxIcon[i].addEventListener("click", () => {
      // UNCHECK AS INCOMPLETE
      if (
        eventParent
          .querySelector(".checkToDo")
          .classList.contains("checkComplete")
      ) {
        console.log(eventParent.querySelector(".reallyChecked").checked);
        eventParent
          .querySelector(".checkToDo")
          .classList.remove("checkComplete");
        eventParent.querySelector(".toDoText").classList.remove("markComplete");
        // CHECK AS COMPLETE
      } else {
        console.log(eventParent.querySelector(".reallyChecked").checked);
        eventParent.querySelector(".checkToDo").classList.add("checkComplete");
        eventParent.querySelector(".toDoText").classList.add("markComplete");
      }
    });
  }
};

export { completeToDo };
