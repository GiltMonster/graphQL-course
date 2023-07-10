import { gql } from 'apollo-server';

export const apiFiltersTypeDefs = gql`
  input apiFiltersInput {
    _sort: String
    _order: ApiFilterOrder
    _start: Int
    _limit: Int
  }

  enum ApiFilterOrder {
    DESC
    ASC
  }
`;
