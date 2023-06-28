import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';

//Para obrigar o objeto a nao ser null, basta colocar uma '!' ao lado
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen(4000).then(({ url }) => {
  console.log(`Server listening on url: ${url}`);
});
