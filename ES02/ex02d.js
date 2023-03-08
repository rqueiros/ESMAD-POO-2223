function calcImc(weight, height) {
  const imc = weight / (height * height);
  if (imc < 18.5) {
    alert('Under weight');
  } else if (imc >= 18.5 && imc <= 24.9) {
    alert('Normal height');
  } else if (imc >= 25 && imc <= 29.9) {
    alert('Over weight');
  } else if (imc >= 30 && imc <= 34.9) {
    alert('Obese (Class I)');
  } else if (imc >= 35 && imc <= 39.9) {
    alert('Obese (Class II)');
  } else {
    alert('Obese (Class III)');
  }
}

const weight = +prompt('What is your weight?');
const height = +prompt('What is your height?');

calcImc(weight, height);
