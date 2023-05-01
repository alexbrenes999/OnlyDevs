import { gql } from '@apollo/react-hooks';

export const QUERY_USER = gql`
{
  user {
    _id
    firstName
    lastName
    username
    location
    jobTitle
    skills
    contact
  }
}

`;
