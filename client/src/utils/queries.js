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
export const FIND_HELPPOST =gql`
query Query {
  helpPost {
    title
    timeline
    languages
    description
    contact
  }
}
`


