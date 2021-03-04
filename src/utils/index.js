export const parseInput = (input) => (
  input
    .toLowerCase()
    .replaceAll(/[^a-z]/g, '')
);

export default parseInput;
