let flashcards = [];
let questionTextarea = document.querySelector(".text1");
let answerTextarea = document.querySelector(".text2");
// Load flashcards from localStorage, if any
if (localStorage.getItem("flashcards")) {
    flashcards = JSON.parse(localStorage.getItem("flashcards"));
    displayFlashcards();
}

// Add event listener for form submission
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Create a new flashcard object and add it to the flashcards array
    let question = this.elements["question"].value;
    let answer = this.elements["answer"].value;
    let newFlashcard = { question: question, answer: answer, hide: "hidden" };
    flashcards.push(newFlashcard);

    // Save flashcards to localStorage
    localStorage.setItem("flashcards", JSON.stringify(flashcards));

    // Clear form inputs
    this.elements["question"].value = "";
    this.elements["answer"].value = "";
     
    // Display the updated list of flashcards
    displayFlashcards();
});
function displayFlashcards() {
    let flashcardContainer = document.querySelector(".flashcard-container");
    flashcardContainer.innerHTML = "";
    for (let i = 0; i < flashcards.length; i++) {
        let flashcardHTML = `
      <div id="flashcard${i}" class="flashcard-wrapper">
        <h3>${flashcards[i].question}</h3>
        <a href="#" class="showhide">Show/Hide Answer</a>
        <h4 id= "${i}" class="${flashcards[i].hide}">${flashcards[i].answer}</h4>
        <div class="button-container">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      </div>`;
        flashcardContainer.innerHTML += flashcardHTML;
    }

    for (let i = 0; i < flashcards.length; i++) {
        let flashcardBase = document.getElementById("flashcard" + i);
        let a = flashcardBase.querySelector("a");
        let edit = flashcardBase.querySelector(".edit-btn");
        let deletebtn = flashcardBase.querySelector(".delete-btn");
       
        a.addEventListener("click", function (event) {
            event.preventDefault();
         let last = document.getElementById(i);
        //  alert(i.value);
        
        if (last.style.display === 'none') {
            //  this SHOWS the form
            last.style.display = 'block';
          } else {
            //  this HIDES the form
            last.style.display = 'none';
          }
      
        });

        edit.addEventListener("click", function (event) {
            event.preventDefault();
       
           
            questionTextarea.value = flashcards[i].question;
            answerTextarea.value = flashcards[i].answer;
            flashcards.splice(i, 1);
            displayFlashcards();
        });

        deletebtn.addEventListener("click", function (event) {
            event.preventDefault();
            flashcards.splice(i, 1);
            localStorage.setItem("flashcards", JSON.stringify(flashcards));
            displayFlashcards();
        });
    }
}

