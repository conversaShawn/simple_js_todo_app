// DELETE ALL
const deleteAll = () => {
    // let deleteAllButton = document.getElementById("deleteAllButton");
    let allTodos = document.getElementsByTagName("li");
    // console.log('how many left: ', allTodos.length);
    // for (let i = 0; i < allTodos.length; i++) {
    //   allTodos[i].remove()
    //   console.log(i)
    //   // debugger
    // }
    let i = allTodos.length;
  
    while (i--) {
      allTodos[i].remove();
    }
    console.log('how many left: ', allTodos.length)
  };