import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type User {
        name: String!
        age: Int!
        country: String!
        club: String!
    }

    type Query {
        getUsers: [User]!
        getUserByName(name: String!): User
    }

    type Mutation {
        addUser(
            name: String!
            age: Int!
            country: String!
            club: String!
        ): User
        deleteUser(name: String!): User
        updateClub(
            name: String!
            club: String!
            ): User
    }
`