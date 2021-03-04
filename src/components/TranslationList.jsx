import React from 'react';

const TranslationList = ({ translations = [] }) => {
  if (translations.length < 1) {
    return <p>No translation history</p>;
  }
  return (
    <div className="translation-list">
      <h3>Translation history:</h3>
      <ul>
        {translations.map((translationItem, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>{translationItem}</li>))}
      </ul>
    </div>
  );
};

export default TranslationList;
