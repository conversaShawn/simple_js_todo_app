// ADD DELETE BUTTON;
const deleteToDo = () => {
  let trashcans = document.querySelectorAll(".deleteToDo");
  
  for (let i = 0; i < trashcans.length; i++) {
    trashcans[i].addEventListener("click", (event) => {
      if (trashcans.length) {
        // THIS IS BREAKING STUFF (PARENTNODE.remove())
        trashcans[i].parentNode.remove();
        console.log("how many left: ", trashcans.length);
      } 
    });
  }
  // while (trashcans.length > 0) {
  //   // New JS remove Function
  //   trashcans[0].remove();
  //   // Safer cross browser
  //   // Has to traverse by going up to the parent and removing the child
  //   // Which is itself, the li element.
  //   trashcans[0].parentNode.removeChild(trashcans[0]);
    
  // }
};

export { deleteToDo };
