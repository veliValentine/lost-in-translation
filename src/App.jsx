import React, { useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import TranslationList from './components/TranslationList';
import TranslationPage from './components/TranslationPage';

const App = () => {
  const [user, setUser] = useState(null);
  const [translations, setTranslations] = useState([]);

  const login = (username = null) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
    setTranslations([]);
  };

  const addTranslation = (translation) => {
    const newTranslationArray = translations.concat(translation);
    if (newTranslationArray.length > 10) {
      newTranslationArray.shift();
    }
    setTranslations(newTranslationArray);
  };

  const showLoginOrTranslationPage = () => (
    user
      ? <TranslationPage translations={translations} addTranslation={addTranslation} />
      : <LoginPage login={login} />
  );

  return (
    <div>
      <Header user={user} logout={logout} />
      {showLoginOrTranslationPage()}
      <TranslationList translations={translations} />
      <Footer />
    </div>
  );
};

export default App;
