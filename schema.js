// this will be our first schema
import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

export default schema;