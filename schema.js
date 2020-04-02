// this will be our first schema
import { buildSchema } from 'graphql';

// the ! means mandatory
const schema = buildSchema(`

    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        age: Int
        language: String
        email: String
    }

    type Query {
        getFriend(id: ID): Friend
    }

    input FriendInput{
        id: ID
        firstName: String!
        lastName: String
        gender: String
        language: String
        age: Int
        email: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`)

export default schema;