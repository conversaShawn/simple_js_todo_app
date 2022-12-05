const completeAllToDos = () => {
  let completeAllButton = document.getElementById("completeAllButton");

  completeAllButton.addEventListener("click", () => {
    // console.log("complete");
    // CHECKED OR NOT CHECKED?
    let addCheckBoxIcon = document.querySelectorAll(".reallyChecked");

    for (let i = 0; i < addCheckBoxIcon.length; i++) {
      let eventParent = addCheckBoxIcon[i].parentNode;
      // console.log(eventParent);
      if (
        eventParent
          .querySelector(".checkToDo")
          .classList.contains("checkComplete") &&
        !completeAllButton.checked
      ) {
        // console.log(addCheckBoxIcon[i].checked)
        console.log(
          addCheckBoxIcon[i].parentNode.querySelector(".toDoText").innerHTML
        );
        // addCheckBoxIcon[i].checked = true;
        // console.log(addCheckBoxIcon)
        // console.log(eventParent.querySelectorAll('.reallyChecked'))
        // eventParent[5].classList.add("markComplete");
        eventParent
          .querySelector(".checkToDo")
          .classList.remove("checkComplete");
        // eventParent[3].classList.add("checkComplete");
        eventParent.querySelector(".toDoText").classList.remove("markComplete");
      }
      // else {
      // if (eventParent.querySelector('.checkToDo').classList.contains("checkComplete")) {

      if (completeAllButton.checked) {
      // console.log(addCheckBoxIcon[i].checked)

      // console.log(addCheckBoxIcon[i].parentNode.querySelector('.toDoText').innerHTML)

      // console.log(completeAllButton.checked)
      // addCheckBoxIcon[i].checked = false;
      // console.log(addCheckBoxIcon[i].checked)
      // eventParent[5].classList.remove("markComplete");

      eventParent.querySelector(".checkToDo").classList.add("checkComplete");
      // eventParent[3].classList.remove("checkComplete");

      eventParent.querySelector(".toDoText").classList.add("markComplete");
      }
    }
  });
};

export { completeAllToDos };
