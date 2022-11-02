// ADD DELETE BUTTON;
const deleteToDo = () => {
  let trashcans = document.getElementsByClassName("deleteToDo");
  

  for (let i = 0; i < trashcans.length; i++) {
    trashcans[i].addEventListener("click", (event) => {
      if (trashcans.length) {
        event.target.parentNode.remove();
        console.log("how many left: ", trashcans.length);
      } 
    });
  }
};

export { deleteToDo };
