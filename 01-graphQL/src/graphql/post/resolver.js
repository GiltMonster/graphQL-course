function post(_, { id }, { fetch, urlPost }) {
  return fetch(`${urlPost}?${id}`).then((response) => response.json());
}

function posts(_, { input }, { fetch, urlPost }) {
  const apiFiltersInput = new URLSearchParams(input);
  return fetch(`${urlPost}?${apiFiltersInput}`).then((response) =>
    response.json(),
  );
}

export const postResolver = {
  Query: {
    post,
    posts,
  },
};
