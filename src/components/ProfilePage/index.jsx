import React from 'react';
import TranslationList from '../TranslationList';
import authenticated from '../../utils/authenticated';

const ProfilePage = ({ translations = [], clearTranslations, logout }) => {
  const handleClick = (event) => {
    event.preventDefault();
    clearTranslations();
  };

  return (
    <div className="profile-page">
      <h2>Profile page</h2>
      <button id="logout-button" onClick={logout} type="submit">Logout</button>
      {translations.length > 0 && <button type="submit" onClick={handleClick}>Clear history</button>}
      <TranslationList translations={translations} />
    </div>
  );
};

export default authenticated(ProfilePage);
