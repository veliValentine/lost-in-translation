import React from 'react';
import './index.css';

const Header = ({ user, logout }) => {
  const userPage = () => (
    <>
      <p>{`Hello ${user}. Link to userpage`}</p>
      <button type="submit" onClick={logout}>Logout</button>
    </>
  );
  return (
    <>
      <div className="header">
        <h3>Lost in translation</h3>
        {user && userPage()}
      </div>
      <hr />
    </>
  );
};

export default Header;
