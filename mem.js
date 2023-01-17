const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  let temp = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = temp;
  return temp;
};
const fib2 = (n) => {
  if (n <= 2) return 1;
  return fib2(n - 1) + fib2(n - 2);
};

console.log(fib(1000));
