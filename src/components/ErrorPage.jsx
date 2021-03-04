import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div className="error-page">
    <h3>There was an unexpected error</h3>
    <Link to="/">Home</Link>
  </div>
);

export default ErrorPage;
