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
    contact: String

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