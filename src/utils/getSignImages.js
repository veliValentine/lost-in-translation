const getFileName = (path) => path.replace(/.\//, '').replace(/.png/, '');

const getSignImages = () => {
  const directory = {};
  const importImages = (r) => (
    r.keys().forEach((key) => {
      const letter = getFileName(key);
      directory[letter] = r(key).default;
    })
  );
  importImages(require.context('../resources/individial_signs/', false, /[a-z].png/));
  return directory;
};

export default getSignImages;
