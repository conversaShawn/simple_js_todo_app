// ADD DELETE BUTTON;
const addTrashCan = () => {
    // console.log("it deletes");
  
    // get parent node
    let addTrashCanIcon = document.querySelectorAll("li");
  
    // DELETE
    addTrashCanIcon.forEach((singleTrashCan) => {
      let trashcan = document.createElement("div");
      trashcan.classList.add("deleteToDo");
      singleTrashCan.appendChild(trashcan);
      trashcan.addEventListener("click", () => {
        // trashcan.parentElement.style.display = "none";
        trashcan.parentElement.remove();
        // trashcan.parentNode.remove()
      });
    });
    console.log('how many left: ', singleTrashCan)
  };
  addTrashCan();