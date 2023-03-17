// b. Select element  with id 'p2' and log it to the console
const p2 = document.getElementById('p2');
console.log(p2);

// c. Select the paragraphs and log them to the console
const ps = document.getElementsByTagName('p');
for (const p of ps) {
  console.log(p);
}

// d. Select the paragraphs and log their content to the console
const psContents = document.getElementsByTagName('p');
for (const p of psContents) {
  console.log(p.innerHTML);
}

// e. Select all elements with class 'red' and log their content to the console
const elmsRed = document.getElementsByClassName('red');
for (const elm of elmsRed) {
  console.log(elm.innerHTML);
}

// f. Select and log to the console the element <p> with the Id 'p3'
const pp3 = document.querySelector('p#p3');
console.log(pp3);

// g. Select and log to the console the content of the elements <p> and <div>
const pDivs = document.querySelectorAll('p,div');
for (const elm of pDivs) {
  console.log(elm.innerHTML);
}

// h. Select and log to the console the content of the <span> elements
const spans = document.querySelectorAll('span');
for (const elm of spans) {
  console.log(elm.innerHTML);
}

/*
 i. Select and log to the console the content of the <span> element
 that is inside of the <div> element
*/
const spanDiv = document.querySelector('div span');
console.log(spanDiv.innerHTML);

/*
 j. Select and log to the console the content of the <span> element
 that is outside of the <div> element
*/
const spanOutDiv = document.querySelector('body>span');
console.log(spanOutDiv.innerHTML);
