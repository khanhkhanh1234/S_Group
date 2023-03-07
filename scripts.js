//hide form

const click = document.querySelector(".addbtn");
console.log(click);
const formEdit = document.querySelector(".edit");
console.log(formEdit);
const formAdd = document.querySelector(".childformadd");
console.log(formAdd);
// formAdd.style.opacity = "1";
formAdd.style.opacity = '0';
click.addEventListener('click', () => {
  if (formAdd.style.opacity === "0") {
    formAdd.style.display = "block";
    formAdd.style.opacity = '1';
    // formAdd.style.zIndex = '3';
  } else {
    // formAdd.style.display = "none";
    formAdd.style.opacity = '0';
  }
});
//them the  vao todo
let todos = [];
let categoryTextarea = document.getElementById("category");
let titleTextarea = document.getElementById("title");
let contentTextarea = document.getElementById("content");
let editCategoryTextarea = document.getElementById("edit-category");
let amen = document.querySelector(".submitadd");
let a = document.querySelector(".category");
let b = document.querySelector(".title");
let c = document.querySelector(".content");
if (amen != null) {
  console.log(amen);
}
if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
  displayFlashcards();
}
// amen.addEventListener("click", function (event) {
//     alert("hello");
// });
amen.addEventListener("click", function (event) {
  // alert("hello");
  if (a.value != null && b.value != null && c.value != null) {
    event.preventDefault();
    console.log(a.value);
    // Create a new flashcard object and add it to the flashcards array
    let category = a.value;
    let title = b.value;
    let content = c.value;
    let newTodo = { category: category, title: title, content: content, column: "0" };
    todos.push(newTodo);
    console.log(content);
    // Save flashcards to localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
    formAdd.style.opacity = '0';
    formAdd.style.zIndex = '0';
    b.value = "";
    a.value = "";
    c.value = "";

    // Display the updated list of flashcards
    displayFlashcards();
  }
  else {
    alert("Please fill in all the fields");
  }
});
function displayFlashcards() {
  let flashcardContainer = document.querySelector(".flashcard-container");
  flashcardContainer.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    let flashcardHTML = `
        <div class="box" id = "todos${i}" >
        <div class="box-head" >
          <div class="box-title">
            <div class="category">${todos[i].category}</div>
            <h3 class="title">${todos[i].title}</h3>
          </div>
          <div class="box-action">
            <div class="icon edit-btn" >
              <img class = "edit-btn" src="./img/eidts.png" alt="edit" >
            </div>
            <div class="icon">
              <img class="delete-btn" src="./img/delete.png" alt="delete" >
            </div>
          </div>
        </div>
        <div class="box-divider"></div>
        <div class="box-body">
          <p class="box-desc content">
            ${todos[i].content}
          </p>
         
        </div>
      </div>
    `;
    flashcardContainer.innerHTML += flashcardHTML;
  }

  for (let i = 0; i < todos.length; i++) {
    let todoBase = document.getElementById("todos" + i);
    console.log(todoBase);
    // let a = flashcardBase.querySelector("a");
    let edit = todoBase.querySelector(".edit-btn");
    let deletebtn =todoBase.querySelector(".delete-btn");
    let show = document.querySelector(".submitedit");
    let radioTodo = document.getElementById("todo");
    let radioDoing = document.getElementById("doing");
    let radioDone = document.getElementById("done");
    console.log(radioTodo);
    // let show = flashcardBase.querySelector("h4");
    // a.addEventListener("click", function (event) {
    //     event.preventDefault();
    //  let last = document.getElementById(i);
    // //  alert(i.value);

    // if (last.style.display === 'none') {
    //     //  this SHOWS the form
    //     last.style.display = 'block';
    //   } else {
    //     //  this HIDES the form
    //     last.style.display = 'none';
    //   }

    // });
     console.log(edit);
    edit.addEventListener("click", function (event) {
      event.preventDefault();
      formEdit.style.opacity = '0';
      if (formEdit.style.opacity === "0") {
        formEdit.style.opacity = '1';
        formAdd.style.display = 'none';
        }
      //  else {
      //   formEdit.style.opacity = '0';
      // }
        // event.preventDefault();
        let d = todos[i].category;
        let e = todos[i].title;
        let f = todos[i].content;
        document.getElementById("edit-category").value = d;
        document.getElementById("edit-title").value = e;
        document.getElementById("edit-content").value = f;
        console.log(d);
        // console.log(document.querySelector(".edit-category"));
       
        // categoryTextarea.value = todos[i].category;
        // titleTextarea.value = todos[i].title;
        // contentTextarea.value = todos[i].content;
        // todos.splice(i, 1);
     
        // localStorage.setItem("todos", JSON.stringify(todos));
        displayFlashcards();
    });
    show.addEventListener("click", function (event) {
      event.preventDefault();
      // alert("hello");
      let g = document.getElementById("edit-category").value;
      let h = document.getElementById("edit-title").value;
      let j = document.getElementById("edit-content").value;
      console.log(g);
      todos[i].category= g;
      todos[i].title = h;
      todos[i].content= j;
      localStorage.setItem("todos", JSON.stringify(todos));
      formEdit.style.opacity = '0';
      // formEdit.style.display = 'none';
      displayFlashcards();
    });
    deletebtn.addEventListener("click", function (event) {
        event.preventDefault();
        todos.splice(i, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
        displayFlashcards();
    });
  }
}


