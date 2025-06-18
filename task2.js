function min(...args) {
  let result = args[0];
  for (let val of args) {
    if (val < result) result = val;
  }
  return result;
}