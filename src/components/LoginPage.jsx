import React from 'react';
import Form from './Form';

const LoginPage = ({ login }) => (
  <div className="login-page">
    <h2>Login</h2>
    <Form onSubmit={login} placeholder="Username" buttonText="Login" />
  </div>
);

export default LoginPage;
