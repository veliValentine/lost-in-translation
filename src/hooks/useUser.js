import { useState, useEffect } from 'react';
import { getUserFromStorage } from '../utils/storageHelpers';
import { updateStorage } from '../utils/localStorage';

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
