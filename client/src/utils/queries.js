import { gql } from '@apollo/react-hooks';

export const QUERY_USER = gql`
{
  user {
    _id
    firstName
    lastName
    username
    profile{
      location
      jobTitle
      skills
      contact
    }
  }
}

`;
