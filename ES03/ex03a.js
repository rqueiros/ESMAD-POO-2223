// Create all the elements
const table = document.createElement('table');
const firstTr = document.createElement('tr');
const secondTr = document.createElement('tr');
const firstTh = document.createElement('th');
const secondTh = document.createElement('th');
const firstTd = document.createElement('td');
const secondTd = document.createElement('td');
const firstText = document.createTextNode('Escola');
const secondText = document.createTextNode('Local');
const thirdText = document.createTextNode('ESMAD');
const fourthText = document.createTextNode('Vila do Conde');

// Add the text nodes to the elements <th> and <td>
firstTh.appendChild(firstText);
secondTh.appendChild(secondText);
firstTd.appendChild(thirdText);
secondTd.appendChild(fourthText);

// Add the elements <th> and <td> to the elements <tr>
firstTr.appendChild(firstTh);
firstTr.appendChild(secondTh);
secondTr.appendChild(firstTd);
secondTr.appendChild(secondTd);

// Add the elements <tr> to the element <table>
table.appendChild(firstTr);
table.appendChild(secondTr);

// add the element <table> to the element <body>
document.body.appendChild(table);
