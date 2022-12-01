// ADD DELETE BUTTON;
const deleteToDo = () => {
  let trashcans = document.querySelectorAll(".deleteToDo");

  for (let i = 0; i < trashcans.length; i++) {
    trashcans[i].addEventListener("click", (event) => {
      if (trashcans.length) {
        trashcans[i].parentNode.remove();
        console.log("how many left: ", trashcans.length);
      }
    });
  }
};

export { deleteToDo };
