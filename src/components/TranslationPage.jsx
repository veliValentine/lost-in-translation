import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Form from './Form';

import { convertWordToSignImages } from '../utils/signImages';
import { parseInput } from '../utils';
import authenticated from '../utils/authenticated';

const TranslationPage = ({ addTranslation }) => {
  const { word = '' } = useParams();
  const [translation, setTranslation] = useState(word);
  const submitTranslation = (input) => {
    if (input !== '') {
      setTranslation(input);
      addTranslation(input);
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
  const words = input.split(/[\s]+/)
    .map(parseInput);
  const translations = words.map((word, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <div className="sign-word" key={`${word}-${index}`}>
      {convertWordToSignImages(word)}
    </div>
  ));
  return (
    <div>
      <p>{`${words.join(' ')} translated to`}</p>
      <div className="translation">
        {translations}
      </div>
    </div>
  );
};

export default authenticated(TranslationPage);
