function post(_, { id }, { fetch, urlPost }) {
  return fetch(`${urlPost}/${id}`)
    .then((response) => response.json())
    .then((post) => {
      if (typeof post.id === 'undefined') {
        return {
          statusCode: 404,
          message: 'Post not found!',
        };
      }
      return post;
    });
}

function posts(_, { input }, { fetch, urlPost }) {
  const apiFiltersInput = new URLSearchParams(input);
  return fetch(`${urlPost}/?${apiFiltersInput}`).then((response) =>
    response.json(),
  );
}

export const postResolver = {
  Query: {
    post,
    posts,
  },

  PostResult: {
    __resolveType: (obj) => {
      if (typeof obj.statusCode !== 'undefined') return 'PostNotFoundError';
      if (typeof obj.id !== 'undefined') return 'Post';
      return null;
    },
  },
};
