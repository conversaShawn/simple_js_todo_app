// DELETE ALL
const deleteAllToDos = () => {
  let deleteAllButton = document.getElementById("deleteAllButton");

  deleteAllButton.addEventListener("click", () => {
    let allTodos = document.getElementsByTagName("li");
    let i = allTodos.length;

    while (i--) {
      allTodos[i].remove();
    }
    console.log("how many left: ", allTodos.length);
  });
};

export { deleteAllToDos };
