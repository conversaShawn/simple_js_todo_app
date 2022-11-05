const completeAllToDos = () => {
  let completeAllButton = document.getElementById("completeAllButton");

  completeAllButton.addEventListener("click", (event) => {
    // console.log("complete");
    // CHECKED OR NOT CHECKED?
    console.log(event.target.checked);

    // TARGET .REALLYCHECKED AND ALLOW CSS TO UPDATE STYLES

    let allReallyChecked = document.querySelectorAll(".reallyChecked");

    let addCheckBoxIcon = document.getElementsByClassName("reallyChecked");

    for (let i = 0; i < addCheckBoxIcon.length; i++) {
      let eventParent = addCheckBoxIcon[i].parentNode.childNodes;

      // SET VAR FOR CURRENT STATE => 2 FUNCS

      if (!addCheckBoxIcon[i].checked) {
        // event.target.classList.add("markComplete");
        // addCheckBoxIcon[i].checked = !addCheckBoxIcon[i].checked;
        addCheckBoxIcon[i].checked = true; //= !addCheckBoxIcon[i].checked;
        // event.target.checked = true //classList.add("markComplete");
        // console.log(addCheckBoxIcon[i].checked) //classList.add("markComplete");
        eventParent[5].classList.add("markComplete");
        // } else if (!event.target.checked) {
        //   // event.target.classList.remove("markComplete");
        //   event.target.checked = false //classList.remove("markComplete");
        //   eventParent[5].classList.remove('markComplete')
        //   // singleRC.checked = false
      }
      if (!completeAllButton.checked) {
        // event.target.classList.add("markComplete");
        // addCheckBoxIcon[i].checked = !addCheckBoxIcon[i].checked;
        addCheckBoxIcon[i].checked = false; //= !addCheckBoxIcon[i].checked;
        // event.target.checked = true //classList.add("markComplete");
        // console.log(addCheckBoxIcon[i].checked) //classList.add("markComplete");
        eventParent[5].classList.remove("markComplete");
        // } else if (!event.target.checked) {
        //   // event.target.classList.remove("markComplete");
        //   event.target.checked = false //classList.remove("markComplete");
        //   eventParent[5].classList.remove('markComplete')
        //   // singleRC.checked = false
      }

    }
    // for (let i = 0; i < allReallyChecked.length; i++) {
    //   let eventParent = addCheckBoxIcon[i].parentNode.childNodes;

    //   // SET VAR FOR CURRENT STATE => 2 FUNCS

    //   if (addCheckBoxIcon[i].checked) {
    //     // event.target.classList.add("markComplete");
    //     // addCheckBoxIcon[i].checked = !addCheckBoxIcon[i].checked;
    //     addCheckBoxIcon[i].checked = false; //= !addCheckBoxIcon[i].checked;
    //     // event.target.checked = true //classList.add("markComplete");
    //     // console.log(addCheckBoxIcon[i].checked) //classList.add("markComplete");
    //     eventParent[5].classList.remove("markComplete");
    //     // } else if (!event.target.checked) {
    //     //   // event.target.classList.remove("markComplete");
    //     //   event.target.checked = false //classList.remove("markComplete");
    //     //   eventParent[5].classList.remove('markComplete')
    //     //   // singleRC.checked = false
    //   }
    // }
  });
};

export { completeAllToDos };
