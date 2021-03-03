import React from 'react';
import { Link } from 'react-router-dom';
import TranslationList from './TranslationList';

const ProfilePage = ({ translations = [], clearTranslations }) => {
  const handleClick = (event) => {
    event.preventDefault();
    clearTranslations();
  };

  return (
    <div className="profile-page">
      <Link to="/logout">Logout</Link>
      <h2>Profile page</h2>
      <TranslationList translations={translations} />
      {translations.length > 0 && <button type="submit" onClick={handleClick}>Clear history</button>}
    </div>
  );
};

export default ProfilePage;
