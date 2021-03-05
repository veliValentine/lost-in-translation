import { useState, useEffect } from 'react';
import { parseInput } from '../utils';
import { updateStorage } from '../utils/localStorage';
import { getTranslationsFromstorage, userLoggedIn } from '../utils/storageHelpers';

const useTranslations = (user) => {
  const [translations, setTranslations] = useState([]);

  useEffect(() => {
    if (user) {
      setTranslations(getTranslationsFromstorage(user));
    }
  }, [user]);

  const addTranslation = (translation = '') => {
    const parseTranslation = parseInput(translation);
    if (parseTranslation === '') {
      return false;
    }
    const storedTranslations = getTranslationsFromstorage(user);
    const newTranslations = [parseTranslation].concat(storedTranslations);
    while (newTranslations.length > 10) {
      newTranslations.pop();
    }
    setTranslations(newTranslations);
    if (userLoggedIn(user)) {
      updateStorage({ translations: newTranslations });
    }
    return true;
  };

  const clearTranslations = () => {
    setTranslations([]);
    if (userLoggedIn(user)) {
      updateStorage({ translations: [] });
    }
  };

  return [translations, addTranslation, clearTranslations];
};

export default useTranslations;
