// ADD DELETE BUTTON;
const deleteToDo = () => {
  let trashcans = document.getElementsByClassName("deleteToDo");

  for (let i = 0; i < trashcans.length; i++) {
    let parent = trashcans[i].parentNode;
    trashcans[i].addEventListener("click", () => {
      parent.remove();
      console.log("how many left: ", trashcans.length);
    });
  }
};

export { deleteToDo };
