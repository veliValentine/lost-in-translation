import React from 'react';
import { Redirect } from 'react-router-dom';
import Form from './Form';

const LoginPage = ({ login, user }) => {
  if (user) {
    return <Redirect to="/" />;
  }
  return (
    <div className="login-page">
      <h2>Login</h2>
      <Form onSubmit={login} placeholder="Username" buttonText="Login" />
    </div>
  );
};

export default LoginPage;
