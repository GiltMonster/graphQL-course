import fetch from 'node-fetch';

export const context = () => {
  return {
    fetch,
    urlUser: 'http://localhost:3000/users/',
    urlPost: 'http://localhost:3000/posts/',
  };
};
