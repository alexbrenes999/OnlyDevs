import { gql } from '@apollo/react-hooks';

export const QUERY_USER = gql`
{
    user(id: $userId) {
      _id
      firstName
      lastName
      username
    }
  }
`;
