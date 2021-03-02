import React, { useState } from 'react';
import {
  Redirect, Route, Switch, useHistory,
} from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import Logout from './components/Logout';
import TranslationList from './components/TranslationList';
import TranslationPage from './components/TranslationPage';

const App = () => {
  const [user, setUser] = useState(null);
  const [translations, setTranslations] = useState([]);
  const history = useHistory();

  const login = (username = null) => {
    setUser(username);
    history.push('/');
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
  console.log(translations);
  return (
    <div>
      {!user && <Redirect to="/login" />}
      <Header user={user} />
      <Switch>
        <Route path="/login">
          <LoginPage login={login} />
        </Route>
        <Route path="/logout">
          <Logout logout={logout} />
        </Route>
        <Route path="/user">
          <TranslationList translations={translations} />
        </Route>
        <Route path="/">
          <TranslationPage translations={translations} addTranslation={addTranslation} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
