import { gql } from '@apollo/react-hooks';

export const QUERY_USER = gql`
 query Query($username: String!) {
  findOneUser(username: $username) {
    contact
    firstName
    lastName
    jobTitle
    location
    skills
    username
  }
}
`;

