import { gql } from '@apollo/react-hooks';

export const QUERY_USER = gql`
query Query($userId: ID!) {
    user(id: $userId) {
      _id
      firstName
      lastName
      username
    }
  }
`;
