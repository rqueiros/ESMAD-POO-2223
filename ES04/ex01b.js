const myTextBox = document.querySelector('input[type="text"]');

const myP = document.querySelector('p');
myTextBox.addEventListener('input', function () {
  myP.innerHTML = myTextBox.value;
});

const myButton = document.querySelector('input[type="button"]');
myButton.addEventListener('click', function () {
  alert(myTextBox.value.length);
});
