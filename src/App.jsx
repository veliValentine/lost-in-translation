import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import useUser from './hooks/useUser';
import useTranslations from './hooks/useTranslations';

import Header from './components/Header';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import TranslationPage from './components/TranslationPage';

const App = () => {
  const [user, updateUser] = useUser();
  const [translations, addTranslation, clearTranslations] = useTranslations(user);
  const history = useHistory();

  const login = (username = null) => {
    clearTranslations();
    updateUser(username);
    history.push('/');
  };
  const logout = () => login();
  return (
    <div>
      <Header user={user} />
      <Switch>
        <Route path="/login">
          <LoginPage login={login} />
        </Route>
        <Route path="/user">
          <ProfilePage
            translations={translations}
            clearTranslations={clearTranslations}
            logout={logout}
          />
        </Route>
        <Route path="/">
          <TranslationPage addTranslation={addTranslation} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
