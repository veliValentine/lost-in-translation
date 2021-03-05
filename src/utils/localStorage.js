const key = 'sessioObject';

export const setStorage = (value) => {
  const encrypted = btoa(JSON.stringify(value));
  localStorage.setItem(`LOST_IN_TRANSLATION:${key}`, encrypted);
};

export const getStorage = () => {
  const storedValue = localStorage.getItem(`LOST_IN_TRANSLATION:${key}`);
  console.log({ storedValue });
  if (!storedValue) return false;
  return JSON.parse(atob(storedValue));
};

export const updateStorage = (value) => {
  const storedValue = getStorage();
  if (!storedValue) return false;
  const newObject = { ...storedValue, ...value };
  setStorage(newObject);
  return true;
};

export const clearStorage = () => {
  setStorage({});
};
