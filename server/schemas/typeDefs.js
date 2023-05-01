import { gql } from 'apollo-server-express';

const typeDefs = gql`
type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
}

type Query {
    user: User
    helpPost(_id: ID): HelpPost
}

type HelpPost {
    _id: ID
    title: String
    languages: String
    timeline: String
    description: String
    contact: String
}

type Auth {
    token: ID
    user: User
}

type Profile{
    token: ID
    user: User
    location: String
    jobTitle: String
    skills: String
    contact: String
}

type Mutation {
    registerUser(firstName: String!, lastName: String!, username: String!, password: String!): Auth
    loginUser(username: String!, password: String!): Auth
    createHelpPost(title: String!, languages: String!, timeline: String, description: String!, contact: String!): HelpPost
    editProfile(username: String!, location: String!, jobTitle: String!, skills: String!, contact: String!): Profile
}
`;

export default typeDefs;