import { ApolloServer, gql } from 'apollo-server';

//Para obrigar o objeto a nao ser null, basta colocar uma '!' ao lado
const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: 'klj234iol2-2n',
          userName: 'Lucas S.',
        };
      },
      users: () => {
        return [
          {
            id: 'klj234iol2-2n',
            userName: 'Lucas S.',
          },
          {
            id: 'dfsgsde3112-2n',
            userName: 'Paggnota',
          },
          {
            id: 'sadfqw2123-2n',
            userName: 'TH',
          },
          {
            id: '1dsfgdsfgew42-2n',
            userName: 'Luis',
          },
        ];
      },
    },
  },
});
server.listen(4000).then(({ url }) => {
  console.log(`Server listening on url: ${url}`);
});
