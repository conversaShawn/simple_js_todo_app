const completeAllToDos = () => {
  let completeAllButton = document.getElementById("completeAllButton");

  completeAllButton.addEventListener("click", () => {
    let addCheckBoxIcon = document.querySelectorAll(".reallyChecked");

    for (let i = 0; i < addCheckBoxIcon.length; i++) {
      let eventParent = addCheckBoxIcon[i].parentNode;
      // IF !CHECKED => CHECKED
      if (
        eventParent
          .querySelector(".checkToDo")
          .classList.contains("checkComplete") &&
        !completeAllButton.checked
      ) {
        console.log(
          addCheckBoxIcon[i].parentNode.querySelector(".toDoText").innerHTML
        );
        eventParent
          .querySelector(".checkToDo")
          .classList.remove("checkComplete");
        eventParent.querySelector(".toDoText").classList.remove("markComplete");
      }
      // IF CHECKED => !CHECKED
      if (completeAllButton.checked) {
        eventParent.querySelector(".checkToDo").classList.add("checkComplete");
        eventParent.querySelector(".toDoText").classList.add("markComplete");
      }
    }
  });
};

export { completeAllToDos };
