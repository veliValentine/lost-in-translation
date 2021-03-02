import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = ({ user }) => {
  const loggedUser = () => (
    <div>
      <Link to="/user">
        <p>{`Hello ${user}. Link to userpage`}</p>
      </Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
  return (
    <>
      <div className="header">
        <h3>Lost in translation</h3>
        {user && loggedUser()}
      </div>
      <hr />
    </>
  );
};

export default Header;
