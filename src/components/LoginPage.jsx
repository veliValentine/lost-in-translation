import React, { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');

  const submitUsername = (event) => {
    event.preventDefault();
    onSubmit(username);
    setUsername('');
  };
  return (
    <form onSubmit={submitUsername}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <button type="submit">Login</button>
    </form>
  );
};

const LoginPage = ({ login }) => (
  <div className="login-page">
    <h2>Login</h2>
    <LoginForm onSubmit={login} />
  </div>
);

export default LoginPage;
