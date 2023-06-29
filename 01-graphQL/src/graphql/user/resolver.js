function user() {
  return {
    id: '21sldfuhi2-12',
    userName: 'Lucas Santos Campos',
  };
}

function users() {
  return [
    {
      id: '21sldfuhi2-12',
      userName: 'Lucas .S',
    },
    {
      id: 'sdfasdwe21-12',
      userName: 'TH',
    },
    {
      id: 'asdfsafw12-12',
      userName: 'Luis',
    },
    {
      id: 'sadfwe1234eg-12',
      userName: 'PaggNota',
    },
    {
      id: '22134sadadf-12',
      userName: 'Neves',
    },
    {
      id: 'sadfqwer334-12',
      userName: 'Matulis',
    },
  ];
}

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
