const completeAllToDos = () => {
  let completeAllButton = document.getElementById("completeAllButton");

  completeAllButton.addEventListener("click", (event) => {
    // console.log("complete");
    // CHECKED OR NOT CHECKED?
    console.log(event.target.checked);

    // let completeAllButton = document.getElementById("completeAllButton");

    let allStrikeThrough = document.querySelectorAll("li");
    // allStrikeThrough.forEach((singleRC) => {
    //   if (!singleRC.classList.contains("markComplete")) {
    //     singleRC.classList.add("markComplete");
    //   } else if (!event.target.checked) {
    //     singleRC.classList.remove("markComplete");
    //     // singleRC.checked = false
    //   }
    // });
    // console.log(allStrikeThrough);

    // TARGET .REALLYCHECKED AND ALLOW CSS TO UPDATE STYLES

    let allReallyChecked = document.querySelectorAll(".reallyChecked");
    // allReallyChecked.forEach(singleRC => singleRC.classList.toggle('markCompleteCheckBox'))
    // allReallyChecked.forEach((singleRC) => {
    //   console.log(singleRC.checked);
    //   if (!singleRC.checked) {
    //     singleRC.checked = true;
    //   } else if (!event.target.checked) {
    //     singleRC.checked = false;
    //   }
    // });

    // console.log(allReallyChecked);


    let addCheckBoxIcon = document.getElementsByClassName('reallyChecked')

    for (let i = 0; i < allReallyChecked.length; i++) {
      // addCheckBoxIcon[i].addEventListener("click", (event) => {
        // if (trashcans.length) {
        //   event.target.parentNode.remove();
        //   console.log("how many left: ", trashcans.length);
        // } 
        

        
        let eventParent = addCheckBoxIcon[i].parentNode.childNodes
        // if (event.target.checked) {

          // event.target.classList.add("markComplete");
          addCheckBoxIcon[i].checked = !addCheckBoxIcon[i].checked;
          // event.target.checked = true //classList.add("markComplete");
          // console.log(addCheckBoxIcon[i].checked) //classList.add("markComplete");
          eventParent[5].classList.toggle('markComplete')
        // } else if (!event.target.checked) {
        //   // event.target.classList.remove("markComplete");
        //   event.target.checked = false //classList.remove("markComplete");
        //   eventParent[5].classList.remove('markComplete')
        //   // singleRC.checked = false
        // }
      // });
    }
  });
};

export { completeAllToDos };
