export function findUnique(numbers: number[]) {
  let result = 0;
  numbers.forEach((num) => (result ^= num));
  return result;
}
