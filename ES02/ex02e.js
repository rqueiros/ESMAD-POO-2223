function echo(s, n) {
  let result = '';
  for (let i = 0; i < n; i += 1) {
    result += s;
  }
  alert(result);
}

echo('ESMAD', 3);
