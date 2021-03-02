import React, { useState } from 'react';
import Form from './Form';

const Translation = ({ input }) => {
  const translatedString = input.split('')
    .map((letter) => letter); // TODO convert letter to correct sign image

  return (
    <div>
      <p>Translation:</p>
      {translatedString}
    </div>
  );
};

const TranslationPage = ({ addTranslation }) => {
  const [translation, setTranslation] = useState('');

  const submitTranslation = (inputTranslation) => {
    setTranslation(inputTranslation);
    addTranslation(inputTranslation);
  };

  return (
    <div className="translation-page">
      <h1>Translation page</h1>
      <Form onSubmit={submitTranslation} placeholder="Translation" buttonText="Translate" />
      <Translation input={translation} />
    </div>
  );
};

export default TranslationPage;
