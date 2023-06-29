function user(_, { id }, { fetch, urlUser }) {
  return fetch(`${urlUser}/${id}`).then((response) => response.json());
}
function users(_, __, { fetch, urlUser }) {
  return fetch(urlUser).then((response) => response.json());
}

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
