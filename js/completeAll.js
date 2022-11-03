const completeAllToDos = () => {
  let completeAllButton = document.getElementById("completeAllButton");

  completeAllButton.addEventListener("click", (event) => {
    // console.log("complete");
    // CHECKED OR NOT CHECKED?
    console.log(event.target.checked);

    // let completeAllButton = document.getElementById("completeAllButton");

    let allStrikeThrough = document.querySelectorAll("li");
    allStrikeThrough.forEach((singleRC) => {
      if (!singleRC.classList.contains("markComplete")) {
        singleRC.classList.add("markComplete");
      } else if (!event.target.checked) {
        singleRC.classList.remove("markComplete");
        // singleRC.checked = false
      }
    });
    console.log(allStrikeThrough);

    // TARGET .REALLYCHECKED AND ALLOW CSS TO UPDATE STYLES

    let allReallyChecked = document.querySelectorAll(".reallyChecked");
    // allReallyChecked.forEach(singleRC => singleRC.classList.toggle('markCompleteCheckBox'))
    allReallyChecked.forEach((singleRC) => {
      console.log(singleRC.checked);
      if (!singleRC.checked) {
        singleRC.checked = true;
      } else if (!event.target.checked) {
        singleRC.checked = false;
      }
    });

    // console.log(allReallyChecked);
  });
};

export { completeAllToDos };
