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
`;

export const EDIT_PROFILE = gql`
mutation editProfile($username: String!, $location: String!, $jobTitle: String!, $skills: String!, $contact: String!) {
  editProfile(username: $username, location: $location, jobTitle: $jobTitle, skills: $skills, contact: $contact) {
    user {
      _id
      username
      profile{
        location
        jobTitle
        skills
        contact
      }
    }
  }
}
`;

export const HELP_POST = gql`
mutation createHelpPost($title: String!, $languages: String!, $dates: String!, $description: String!, $contact: String!) {
  createHelpPost(title: $title, languages: $languages, dates: $dates, description: $description, contact: $contact) {
    token
    HelpPost {
      _id
      title
      languages
      timeline
      description
      contact
    }
  }
}
`;

