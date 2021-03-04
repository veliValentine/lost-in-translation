import { useState, useEffect } from 'react';
import { getStorage, updateStorage } from '../utils/localStorage';

const getTranslationsFromstorage = () => {
  const storage = getStorage();
  if (storage) {
    const { translations = [] } = storage;
    return translations;
  }
  return [];
};

const useTranslations = (user) => {
  const [translations, setTranslations] = useState([]);

  useEffect(() => {
    if (user) {
      setTranslations(getTranslationsFromstorage());
    }
  }, [user]);

  const addTranslation = (translation) => {
    const translationList = [translation].concat(getTranslationsFromstorage());
    while (translationList.length > 10) {
      translationList.pop();
    }
    setTranslations(translationList);
    updateStorage({ translations: translationList });
  };

  const clearTranslations = () => {
    setTranslations([]);
    updateStorage({ translations: [] });
  };

  return [translations, addTranslation, clearTranslations];
};

export default useTranslations;
