import React from 'react';

const signs = {};

const getFileName = (path) => path.replace(/.\//, '').replace(/.png/, '');

export const initSignImages = () => {
  console.log('Init sign images');
  const importImages = (r) => (
    r.keys().forEach((key) => {
      const letter = getFileName(key);
      signs[letter] = r(key).default;
    })
  );
  importImages(require.context('../resources/individial_signs/', false, /[a-z].png/));
  return signs;
};

export const convertWordToSignImages = (word) => {
  if (Object.keys(signs).length === 0) {
    initSignImages();
  }
  return (
    word.split('').map((letter, index) => (
      <img className="sign-image" key={`${word}-${letter}-${index}`} src={signs[letter]} alt={letter} /> // eslint-disable-line react/no-array-index-key
    ))
  );
};
