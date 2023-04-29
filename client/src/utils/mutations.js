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

export const LOGIN_USER = gql`
mutation loginUser($username: String!, $password: String!) {
  loginUser(username: $username, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`