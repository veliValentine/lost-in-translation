import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useTranslation from '../../hooks/useTranslation';

import Form from '../Form';
import { convertWordToSignImages } from '../../utils/signImages';
import authenticated from '../../utils/authenticated';

import './translationPage.css';

const TranslationPage = ({ addTranslation }) => {
  const { word = '' } = useParams();
  const [translation, updateTranslation] = useTranslation(word);
  const history = useHistory();
  if (word !== '') {
    history.replace('/');
  }
  const submitTranslation = (input) => {
    updateTranslation(input);
    addTranslation(input);
  };
  return (
    <div className="translation-page">
      <h1>Translation page</h1>
      <Form id="translation-form" onSubmit={submitTranslation} placeholder="Translation" buttonText="Translate" />
      <Translation input={translation} />
    </div>
  );
};

const Translation = ({ input = '' }) => {
  if (input === '') {
    return (
      <div className="translation-container">
        Nothing to translate
      </div>
    );
  }
  const words = input.split(/[\s]+/);
  const translations = words.map((word, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <div className="sign-word" key={`${word}-${index}`}>
      {convertWordToSignImages(word)}
    </div>
  ));
  return (
    <div className="translation-container">
      <p>{`${words.join(' ')} translated to`}</p>
      <div className="translation">
        {translations}
      </div>
    </div>
  );
};

export default authenticated(TranslationPage);
