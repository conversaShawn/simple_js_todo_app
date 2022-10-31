// ADD DELETE BUTTON;
const addTrashCan = () => {
  // console.log("it deletes");

  let itemTemplate = document.getElementById("toDoItem");

  let trashcans = document.getElementsByClassName("deleteToDo");
  //   trashcans.forEach(trashcan => {
  //     itemTemplate.appendChild(trashcan)
  //     trashcan.addEventlistener('click', () => {
  //         console.log('delete!')
  //         // trashcan.parentElement.remove();
  //     })
  //   })
  for (let i = 0; i < trashcans.length; i++) {
    trashcans[i].addEventListener("click", () => {
      console.log("delete!");
      trashcans[i].parentNode.remove()
      console.log(trashcans);

      
    });
  }
};

// get parent node
//   let addTrashCanIcon = document.querySelectorAll("li");

// DELETE
//   addTrashCanIcon.forEach((singleTrashCan) => {
//     let trashcan = document.createElement("div");
//     trashcan.classList.add("deleteToDo");
//     singleTrashCan.appendChild(trashcan);
//     trashcan.addEventListener("click", () => {
//       // trashcan.parentElement.style.display = "none";
//       trashcan.parentElement.remove();
//       // trashcan.parentNode.remove()
//     });
//   });
//   console.log("how many left: ", singleTrashCan);
// };
// addTrashCan();

export { addTrashCan };
