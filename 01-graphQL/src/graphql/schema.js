import { gql } from 'apollo-server';
import { userResolvers } from './user/resolver';
import { userTypeDefs } from './user/typeDefs';
import { postTypeDefs } from './post/typedefs';
import { postResolver } from './post/resolver';
import { apiFiltersTypeDefs } from './api-filters/typedefs';

const rootTypeDefs = gql`
  type Query {
    _began: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _began: () => true,
  },
};

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  postTypeDefs,
  apiFiltersTypeDefs,
];
export const resolvers = [rootResolvers, userResolvers, postResolver];
