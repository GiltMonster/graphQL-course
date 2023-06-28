import { gql } from 'apollo-server';

const rootTypeDefs = gql`
  type Query {
    hi: String
  }
`;

const rootResolvers = {
  Query: {
    hi: () => 'hi teste',
  },
};

export const typeDefs = [rootTypeDefs];
export const resolvers = [rootResolvers];
