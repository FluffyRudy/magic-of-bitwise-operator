export function getTotalBinaryBitsOf(num: number) {
  let n = num;
  let count = 0;
  while (n) {
    n = n >> 1;
    count++;
  }
  return count;
}
