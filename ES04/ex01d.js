const myButton = document.querySelector('input[type="button"]');

window.addEventListener('load', function () {
  myButton.addEventListener('mouseup', function () {
    console.log('Thanks for the button click!');
  });
});
