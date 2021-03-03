import React from 'react';
import {
  Redirect, Route, Switch, useHistory,
} from 'react-router-dom';

import useUser from './hooks/useUser';

import Footer from './components/Footer';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import TranslationPage from './components/TranslationPage';
import useTranslations from './hooks/useTranslations';

const App = () => {
  const [user, updateUser, clearUser] = useUser();
  const [translations, addTranslation, clearTranslations] = useTranslations(user);
  const history = useHistory();

  const login = (username = null) => {
    updateUser(username);
    history.push('/');
  };

  const logout = () => {
    clearUser();
    clearTranslations();
  };

  return (
    <div>
      {!user && <Redirect to="/login" />}
      <Header user={user} />
      <Switch>
        <Route path="/login">
          <LoginPage login={login} user={user} />
        </Route>
        <Route path="/user">
          <ProfilePage
            user={user}
            translations={translations}
            clearTranslations={clearTranslations}
            logout={logout}
          />
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
