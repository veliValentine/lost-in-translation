import React from 'react';
import './index.css';

const Header = ({ user, logout }) => {
  const loggedUser = () => (
    <div>
      <p>{`Hello ${user}. Link to userpage`}</p>
      <button type="submit" onClick={logout}>Logout</button>
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
