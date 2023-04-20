const questions = [
  {
    text: "Qual a capital de França?",
    answers: ['Lisboa', 'Madrid', 'Paris', 'Roma'],
    solution: 2
  },
  {
    text: "Qual o Dia do trabalhador?",
    answers: ['1 de maio', '25 de abril', '10 de junho', '5 de outubro'],
    solution: 0
  },
  {
    text: "Quem são os Imagine Dragons?",
    answers: ['Criadores do YouTube', 'Equipa de basket', 'seita religiosa', 'banda pop-rock'],
    solution: 3
  }
];

let question


// Get all the necessary elements
const door = document.querySelector(".door");
const key = document.querySelector(".key");
const dialog = document.querySelector("dialog")


// Add event listener to the door
door.addEventListener("click", () => {
  // Check if the lock is open
  if (key.style.display === "block") {
    alert("SAISTE DO ER!!");
  } else {
    alert("ENCONTRA PRIMEIRO A CHAVE!!");
  }
});




// Add event listener to the book
const book = document.querySelector(".book");
book.addEventListener("click", () => {
  // show the dialog
  renderDialog()
});


function renderDialog() {
  const index = Math.floor(Math.random() * questions.length);
  question = questions[index]

  dialog.open = true
  dialog.querySelector("#text").innerHTML = question.text
  dialog.querySelector("#answer1").innerHTML = question.answers[0]
  dialog.querySelector("#answer2").innerHTML = question.answers[1]
  dialog.querySelector("#answer3").innerHTML = question.answers[2]
  dialog.querySelector("#answer4").innerHTML = question.answers[3]

  const answers = dialog.querySelectorAll("[name='answers']")
  for (const answer of answers) {
    answer.addEventListener('click', checkSuccess)
  }
}

function checkSuccess(event) {  
  if (event.target.value == question.solution) {
    key.style.display = "block";
    door.style.backgroundColor = "green"
    alert("PARABÉNS, GANHASTE UMA CHAVE");
  } else {
    alert("FALHASTE, TENTA NOVAMENTE")
  }
  dialog.querySelector("form").reset()
  dialog.close()
}


