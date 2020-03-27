// this will be our first schema
import { buildSchema } from 'graphql';

// the ! means mandatory
const schema = buildSchema(`

    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: String
        language: String
        emails: [Email]!
    }

    type Email {
        email: String
    }

    type Query {
        friend: Friend
    }
`)

export default schema;