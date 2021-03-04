import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ user }) => (
  <div>
    <div className="header">
      <h2>Lost in translation</h2>
      <p>{user && <Link to="/">Home</Link>}</p>
      <p>{user && <Link to="/user">{user}</Link>}</p>
    </div>
    <hr />
  </div>
);

export default Header;
