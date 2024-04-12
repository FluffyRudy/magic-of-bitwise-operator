function generateBit(num: number) {
  let n = num;
  const binaryBits: number[] = [];
  while (n) {
    binaryBits.push(n & 1 ? 0 : 1);
    n >>= 1;
  }
  return binaryBits;
}

console.log(generateBit(5));
