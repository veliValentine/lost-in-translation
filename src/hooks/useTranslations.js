import { useState, useEffect } from 'react';
import { getStorage, updateStorage } from '../utils/localStorage';
import { userLoggedIn } from '../utils';

const getTranslationsFromstorage = (user) => {
  const storage = getStorage();
  if (userLoggedIn(user) && storage) {
    const { translations = [] } = storage;
    return translations;
  }
  return [];
};

const useTranslations = (user) => {
  const [translations, setTranslations] = useState([]);

  useEffect(() => {
    if (user) {
      setTranslations(getTranslationsFromstorage(user));
    }
  }, [user]);

  const addTranslation = (translation) => {
    const translationList = [translation].concat(getTranslationsFromstorage(user));
    while (translationList.length > 10) {
      translationList.pop();
    }
    setTranslations(translationList);
    if (userLoggedIn(user)) {
      updateStorage({ translations: translationList });
      console.log('update storage');
    }
  };

  const clearTranslations = () => {
    setTranslations([]);
    if (userLoggedIn(user)) {
      updateStorage({ translations: [] });
      console.log('cleared storage');
    }
  };

  return [translations, addTranslation, clearTranslations];
};

export default useTranslations;
