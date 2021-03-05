import React from 'react';
import { Redirect } from 'react-router-dom';
import { getStorage } from './localStorage';

const authenticated = (Component) => (props) => {
  const storage = getStorage();
  console.log('auth', storage);
  if (storage.user) {
    return <Component {...props} />;
  }
  return <Redirect to="/login" />;
};

export default authenticated;
