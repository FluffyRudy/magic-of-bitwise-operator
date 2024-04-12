export function bitwiseCombination(numOfBinBits: number) {
  const combinations: Array<number[]> = [];
  for (let i = 0; i < 2 ** numOfBinBits; i++) {
    const currComnbination: number[] = [];
    for (let bit = numOfBinBits - 1; bit >= 0; bit--) {
      currComnbination.push((i >> bit) & 1);
    }
    combinations.push(currComnbination);
  }
  return combinations;
}
