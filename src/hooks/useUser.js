import { useState, useEffect } from 'react';
import { getUserFromStorage } from '../utils/storageHelpers';
import { setStorage } from '../utils/localStorage';

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUserFromStorage());
  }, []);

  const updateUser = (username = null) => {
    if (username !== user) {
      setUser(username);
      setStorage({ user: username, translations: [] });
      console.log('saved user to storage');
    }
  };

  const clearUser = () => {
    updateUser(null);
  };

  return [user, updateUser, clearUser];
};

export default useUser;
