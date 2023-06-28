import { ApolloServer, gql } from 'apollo-server';

//Para obrigar o objeto a nao ser null, basta colocar uma '!' ao lado
const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID
      name: String
      age: Int
      average: Float
      married: Boolean!
      arrayString: [String!]!
    }
  `,
  resolvers: {
    Query: {
      id: () => '1a2diady7-sd6',
      name: () => 'Lucas S. campos',
      age: () => 22,
      average: () => 50.55,
      married: () => false,
      arrayString: () => ['a', 'b', 'c'],
    },
  },
});
server.listen(4000).then(({ url }) => {
  console.log(`Server listening on url: ${url}`);
});
