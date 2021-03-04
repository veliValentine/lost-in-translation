import { useState, useEffect } from 'react';
import { updateStorage } from '../utils/localStorage';
import { getTranslationsFromstorage, userLoggedIn } from '../utils/storageHelpers';

const useTranslations = (user) => {
  const [translations, setTranslations] = useState([]);

  useEffect(() => {
    if (user) {
      setTranslations(getTranslationsFromstorage(user));
    }
  }, [user]);

  const addTranslation = (translation) => {
    const storedTranslations = getTranslationsFromstorage(user);
    const newTranslations = [translation].concat(storedTranslations);
    while (newTranslations.length > 10) {
      newTranslations.pop();
    }
    setTranslations(newTranslations);
    if (userLoggedIn(user)) {
      updateStorage({ translations: newTranslations });
    }
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
