import { useState, useEffect } from 'react';
import { getStorage, updateStorage } from '../utils/localStorage';

const useTranslations = (user) => {
  const [translations, setTranslations] = useState([]);

  useEffect(() => {
    if (user) {
      const storage = getStorage();
      if (storage) {
        const { translations: storageTranslations = [] } = storage;
        setTranslations(storageTranslations);
      } else {
        console.log('Else statement in hook');
        setTranslations([]);
      }
    }
  }, [user]);

  const addTranslation = (translation) => {
    const newArray = translations.concat(translation);
    while (newArray.length > 10) {
      newArray.shift();
    }
    setTranslations(newArray);
    updateStorage({ translations: newArray });
  };

  const clearTranslations = () => {
    setTranslations([]);
    updateStorage({ translations: [] });
  };

  return [translations, addTranslation, clearTranslations];
};

export default useTranslations;
