import { getStorage } from './localStorage';

export const userLoggedIn = (user) => {
  const { user: storageUser } = getStorage();
  if (user === storageUser) {
    return true;
  }
  return false;
};

export const getUserFromStorage = () => {
  const storage = getStorage();
  if (storage) {
    const { user = null } = storage;
    return user;
  }
  return null;
};

export const getTranslationsFromstorage = (user) => {
  const storage = getStorage();
  if (userLoggedIn(user) && storage) {
    const { translations = [] } = storage;
    return translations;
  }
  return [];
};
