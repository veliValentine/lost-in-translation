import React, { useState } from 'react';

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

const TranslationForm = ({ onSubmit }) => {
  const [translation, setTranslation] = useState('');

  const submitTranslation = (e) => {
    e.preventDefault();
    onSubmit(translation);
    setTranslation('');
  };
  return (
    <form onSubmit={submitTranslation}>
      <input
        value={translation}
        onChange={(e) => setTranslation(e.target.value)}
        placeholder="Translation"
      />
      <button type="submit">Translate</button>
    </form>
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
      <TranslationForm onSubmit={submitTranslation} />
      <Translation input={translation} />
    </div>
  );
};

export default TranslationPage;
