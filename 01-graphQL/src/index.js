import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      hi: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => {
        return 'hello again';
      },
      hi: () => {
        return 'Hi';
      },
    },
  },
});

server.listen(4000).then(({ url }) => {
  console.log(`Server listening on url: ${url}`);
});
