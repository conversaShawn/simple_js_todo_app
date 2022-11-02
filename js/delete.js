// ADD DELETE BUTTON;
const addTrashCan = () => {
  let trashcans = document.getElementsByClassName("deleteToDo");

  for (let i = 0; i < trashcans.length; i++) {
    trashcans[i].addEventListener("click", () => {
        if (trashcans.length > 1) {

            const individualTrashCan = trashcans[i];
            individualTrashCan.parentNode.remove(individualTrashCan);
            //   trashcans[i].parentElement.remove();
            console.log("how many left: ", trashcans.length);
        }
        else {
            trashcans[0].parentNode.remove()
            console.log("how many left: ", trashcans.length);
        }
    });
  }
};

export { addTrashCan };
