const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    password: String
    email: String
    activityLevel: INT
    contactInfo: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!, activityLevel: INT!, contactInfo: String!): Auth
    addListing(listing: [ID]!): Listing
    updateUser(firstName: String, lastName: String, email: String, password: String, activityLevel: INT!, contactInfo: String!): User
    updateListing(_id: ID!, body: String!): Product
    login(email: String!, password: String!): Auth
  }

  type Request {
    _id: ID
    title: String
    description: String
    qualifications: String
  }

  type Listing {
    _id: ID
    body: String
  }


  type BlogPost {
    _id: ID
    title: String
    author: String
    body: String
    likes: INT
    comment: String
  }

  type Comment {
    _id: ID
    body: String
    author: String
  }

  type Like {
    _id: ID
    upVoteDownVote: INT
  }
`;
// Gus's typeDefs are under the type Mutation
module.exports = typeDefs;
