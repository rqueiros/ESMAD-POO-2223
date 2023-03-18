const btnAdd = document.querySelector('#btnAdd');
const btnShow = document.querySelector('#btnShow');
const btnRemove = document.querySelector('#btnRemove');

const sltColors = document.querySelector('select');

btnAdd.addEventListener('click', function () {
  const color = prompt('Digite uma nova cor?');
  sltColors.innerHTML += `<option value='${color}'>${color}</option>`;
});

btnShow.addEventListener('click', function () {
  alert(sltColors.value);
});

btnRemove.addEventListener('click', function () {
  sltColors.remove(sltColors.selectedIndex);
});
