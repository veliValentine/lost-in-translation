import { useState, useEffect } from 'react';
import { getStorage, updateStorage } from '../utils/localStorage';

const getUserFromStorage = () => {
  const storage = getStorage();
  if (storage) {
    const { user = null } = storage;
    return user;
  }
  return null;
};

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUserFromStorage());
  }, []);

  const updateUser = (username = null) => {
    if (username !== user) {
      setUser(username);
      updateStorage({ user: username, translations: [] });
    }
  };

  const clearUser = () => {
    updateUser(null);
  };

  return [user, updateUser, clearUser];
};

export default useUser;
