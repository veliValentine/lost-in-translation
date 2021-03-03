import { useState, useEffect } from 'react';
import { getStorage, updateStorage } from '../utils/localStorage';

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storage = getStorage();
    if (storage) {
      const { user: sessionUser = null } = storage;
      setUser(sessionUser);
    }
  }, []);

  const clearUser = () => {
    updateStorage({ user: null });
    setUser(null);
  };

  const updateUser = (username) => {
    if (!username) {
      return false;
    }
    setUser(username);
    updateStorage({ user: username });
    return true;
  };

  return [user, updateUser, clearUser];
};

export default useUser;
