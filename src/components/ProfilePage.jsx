import React from 'react';
import TranslationList from './TranslationList';

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

export default ProfilePage;
