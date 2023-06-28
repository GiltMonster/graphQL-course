function post() {
  return {
    id: 'askljdklasjd-21',
    title: 'Esse é um poste falso',
  };
}

function posts() {
  return [
    {
      id: 'askljdklsjd-21',
      title: 'Esse é um poste falso',
    },
    {
      id: 'dfsgdsfgdfg-21',
      title: 'Esse é um poste falso',
    },
    {
      id: 'cvbghjtryuy-21',
      title: 'Esse é um poste falso',
    },
    {
      id: 'rety45fghfg-21',
      title: 'Esse é um poste falso',
    },
  ];
}

export const postResolver = {
  Query: {
    post,
    posts,
  },
};
