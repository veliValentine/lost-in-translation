/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Form from './Form';
import getSignImages from '../utils/getSignImages';
import parseInput from '../utils';

const signs = getSignImages();

const TranslationPage = ({ addTranslation }) => {
  const [translation, setTranslation] = useState('');
  const submitTranslation = (input) => {
    const inputTranslation = parseInput(input);
    if (inputTranslation !== '') {
      setTranslation(inputTranslation);
      addTranslation(inputTranslation);
    }
  };
  return (
    <div className="translation-page">
      <h1>Translation page</h1>
      <Form onSubmit={submitTranslation} placeholder="Translation" buttonText="Translate" />
      <Translation input={translation} />
    </div>
  );
};

const Translation = ({ input = '' }) => {
  if (input === '') {
    return null;
  }
  const translate = parseInput(input);
  const translatedString = translate.split('')
    .map((letter, index) => <img key={index} src={signs[letter]} alt="poop" />);
  return (
    <div>
      <p>{`${translate} translated to`}</p>
      <div className="translation">
        {translatedString}
      </div>
    </div>
  );
};

export default TranslationPage;
