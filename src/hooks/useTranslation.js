import { useState } from 'react';
import { parseInput } from '../utils';

const useTranslation = (input = '') => {
  const parsedInput = parseInput(input);
  const [translation, setTranslation] = useState(parsedInput);

  const updateTranslation = (translationInput) => {
    const parsed = parseInput(translationInput);
    setTranslation(parsed);
  };
  return [translation, updateTranslation];
};

export default useTranslation;
