import { gql } from 'apollo-server-express';

const typeDefs = gql`
type User {
    _id: ID
    firstName: String!
    lastName: String!
    username: String!
    password: String!
    profileInfo: [ProfileInfo]
}

type ProfileInfo {
    location: String
    jobTitle: String
    skillz: String
    languages: String
    contact: String
}

type JobPosting {
    title: String!
    requirements: String!
    projectDate: String!
    body: String!
    author: [User]
    contactInfo: String!
    
}

type BlogPost {
    title: String!
    author: [User]
    body: String!
    comments: [Comment]
    likes: [Likes]
}

type Comment {
    body: String!
    author: [User]
}

type Likes {
    vote: Int!
}

type Query {
    user(id: ID!): User
}

type Auth {
    token: ID
    user: User
}

type Mutation {
    registerUser(firstName: String!, lastName: String!, username: String!, password: String!): Auth
    loginUser(username: String!, password: String!): Auth
}
`;

export default typeDefs;