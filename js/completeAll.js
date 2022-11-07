const completeAllToDos = () => {
  let completeAllButton = document.getElementById("completeAllButton");

  completeAllButton.addEventListener("click", () => {
    // console.log("complete");
    // CHECKED OR NOT CHECKED?

    let addCheckBoxIcon = document.getElementsByClassName("reallyChecked");

    for (let i = 0; i < addCheckBoxIcon.length; i++) {
      let eventParent = addCheckBoxIcon[i].parentNode.childNodes;
      // console.log(eventParent);
      if (!addCheckBoxIcon[i].checked) {
        addCheckBoxIcon[i].checked = true;
        // console.log(addCheckBoxIcon[i].checked)
        eventParent[5].classList.add("markComplete");
        eventParent[3].classList.add("checkComplete")
      }
      if (!completeAllButton.checked) {
        // console.log(completeAllButton.checked)
        addCheckBoxIcon[i].checked = false; //= !addCheckBoxIcon[i].checked;
        // console.log(addCheckBoxIcon[i].checked)
        eventParent[5].classList.remove("markComplete");
        eventParent[3].classList.remove("checkComplete");
      }
    }
  });
};

export { completeAllToDos };
