import React from 'react';
import TranslationList from './TranslationList';
import authenticated from '../utils/authenticated';

const ProfilePage = ({ translations = [], clearTranslations, logout }) => {
  const handleClick = (event) => {
    event.preventDefault();
    clearTranslations();
  };

  return (
    <div className="profile-page">
      <button onClick={logout} type="submit">Logout</button>
      <h2>Profile page</h2>
      <TranslationList translations={translations} />
      {translations.length > 0 && <button type="submit" onClick={handleClick}>Clear history</button>}
    </div>
  );
};

export default authenticated(ProfilePage);
