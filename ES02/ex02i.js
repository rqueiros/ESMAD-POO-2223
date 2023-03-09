function sumNums() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  alert(result);
}

sumNums(3, 4);
sumNums(7, 12, 9, 1);
