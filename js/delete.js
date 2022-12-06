const deleteToDo = () => {
  let trashCan = document.getElementsByClassName("deleteToDo");

  for (let i = 0; i < trashCan.length; i++) {
    let parentLi = trashCan[i].closest(".individualToDo");
    trashCan[i].addEventListener("click", () => {
      parentLi.remove();
    });
  }
};

export { deleteToDo };
