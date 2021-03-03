import React from 'react';
import { useHistory } from 'react-router-dom';

let timeOutId;
const Logout = ({ logout }) => {
  const history = useHistory();

  const loggingOut = () => {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      history.push('/login');
      logout();
    }, 3 * 1000);
  };

  loggingOut();
  return (
    <div className="logout">
      <h3>Logging out!</h3>
    </div>
  );
};

export default Logout;
