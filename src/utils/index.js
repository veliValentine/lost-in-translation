export const parseInput = (input) => (
  input
    .toLowerCase()
    .replaceAll(/[^a-z\s]/g, '')
    .trim()
);

export default parseInput;
