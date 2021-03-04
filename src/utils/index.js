import { getStorage } from './localStorage';

export const parseInput = (input) => (
  input
    .toLowerCase()
    .replaceAll(/[^a-z]/g, '')
);

export const userLoggedIn = (user) => {
  const { user: storageUser } = getStorage();
  if (user === storageUser) {
    return true;
  }
  return false;
};
