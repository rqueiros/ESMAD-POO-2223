// b. Alter the text of the paragraph with Id 'p1' to "Está um dia de chuva"
const p1 = document.getElementById('p1');
p1.innerHTML = 'Está um dia de chuva';

/*
  c. alter the existing image to another with the link:
  https://www.altominho.tv/site/wp-content/uploads/2019/02/chuva.jpg
 */
const newImg = document.querySelector('img');
newImg.src = 'https://www.altominho.tv/site/wp-content/uploads/2019/02/chuva.jpg';

// d. alter the background color of the second paragraph to yellow
const secondP = document.querySelector('p:nth-of-type(2)');
secondP.style.backgroundColor = 'yellow';
