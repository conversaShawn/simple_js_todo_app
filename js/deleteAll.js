// DELETE ALL
const deleteAllToDos = () => {
  let deleteAllButton = document.getElementById("deleteAllButton");

  deleteAllButton.addEventListener("click", () => {
    let allTodos = document.getElementsByTagName("li");
    let i = allTodos.length;

    while (i--) {
      allTodos[i].remove();
    }
  });
};

export { deleteAllToDos };
