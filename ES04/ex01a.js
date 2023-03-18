// ii. DOM property
document.querySelector('input').onclick = function () {
  alert('Olá Mundo!');
};

// iii. Adding an event listener
const myButton = document.querySelector('input[type="button"]');
myButton.addEventListener("click", function () {
  alert('Olá Mundo!');
});
