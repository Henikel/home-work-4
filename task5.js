function digitN(k, n) {
  let str = k.toString();
  if (n > str.length) return -1;
  return +str[str.length - n];
}