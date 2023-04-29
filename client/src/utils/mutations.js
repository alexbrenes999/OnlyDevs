import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
mutation registerUser($firstName: String!, $lastName: String!, $username: String!, $password: String!) {
  registerUser(firstName: $firstName, lastName: $lastName, username: $username, password: $password) {
    token
    user {
      _id
      firstName
      lastName
      username
    }
  }
}
`;