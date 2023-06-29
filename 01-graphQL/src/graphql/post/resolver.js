function post(_, { id }, { fetch, urlPost }) {
  return fetch(`${urlPost}/${id}`).then((response) => response.json());
}

function posts(_, __, { fetch, urlPost }) {
  return fetch(urlPost).then((response) => response.json());
}

export const postResolver = {
  Query: {
    post,
    posts,
  },
};
