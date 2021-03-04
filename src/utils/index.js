const parseInput = (input) => (
  input
    .toLowerCase()
    .replaceAll(/[^a-z]/g, '')
);

// remove and refactor to export const when more util functions
export default parseInput;
