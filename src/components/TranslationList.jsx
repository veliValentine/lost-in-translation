import React from 'react';
import { Link } from 'react-router-dom';

const TranslationList = ({ translations = [] }) => {
  if (translations.length < 1) {
    return <p>No translation history</p>;
  }
  return (
    <div className="translation-list">
      <h3>Translation history:</h3>
      <ul>
        {translations.map((translation, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}><Link to={`/translate/${translation}`}>{translation}</Link></li>))}
      </ul>
    </div>
  );
};

export default TranslationList;
