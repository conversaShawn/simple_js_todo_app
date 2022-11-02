// ADD DELETE BUTTON;
const addTrashCan = () => {

  let trashcans = document.getElementsByClassName("deleteToDo");

  for (let i = 0; i < trashcans.length; i++) {
    trashcans[i].addEventListener("click", () => {
      console.log("delete!");
            const individualTrashCan = trashcans[i];
            individualTrashCan.parentNode.remove()
    //   trashcans[i].parentElement.remove();
    console.log("how many left: ", trashcans.length);
    });
  }
};

export { addTrashCan };