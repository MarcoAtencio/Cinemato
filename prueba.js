function add(n) {
  if (n > 10 && n < 99) {
    result = n
      .toString()
      .split('')
      .map((n) => parseInt(n))
      .reduce((x, y) => x + y);
  } else {
    return;
  }
  return result;
}

add(54);
