// ADD DELETE BUTTON;
const deleteToDo = () => {
  let trashcans = document.getElementsByClassName("deleteToDo");

  for (let i = 0; i < trashcans.length; i++) {
    let parentLiNode = trashcans[i].closest('.individualToDo');
    trashcans[i].addEventListener("click", () => {
      // console.log(parentLiNode)
      parentLiNode.remove();
      console.log("how many left: ", trashcans.length);
    });
  }
};

export { deleteToDo };
