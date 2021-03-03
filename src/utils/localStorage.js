export const setStorage = (key, value) => {
  const encrypted = btoa(JSON.stringify(value));
  localStorage.setItem(key, encrypted);
};

export const getStorage = (key) => {
  const storedValue = localStorage.getItem(key);
  if (!storedValue) return false;
  return JSON.parse(atob(storedValue));
};
