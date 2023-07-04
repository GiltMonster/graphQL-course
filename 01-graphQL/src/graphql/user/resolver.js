function user(_, { id }, { fetch, urlUser }) {
  return fetch(`${urlUser}/${id}`).then((response) => response.json());
}
function users(_, { input }, { fetch, urlUser }) {
  const apiFiltersInput = new URLSearchParams(input);
  return fetch(`${urlUser}?${apiFiltersInput}`).then((response) =>
    response.json(),
  );
}

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
