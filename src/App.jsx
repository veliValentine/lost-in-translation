import React from 'react';
import {
  Link,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

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
        <Route path={['/', '/translate/:word']} exact>
          <TranslationPage addTranslation={addTranslation} />
        </Route>
        <Route path="*">
          <div className="error-page">
            <h3>There was an unexpected error</h3>
            <Link to="/">Home</Link>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
