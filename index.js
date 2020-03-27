import express from 'express';
//updating to run graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

// resolver, function that returns the data from graphql
const root = { friend: () => {
    return {
        "id": 232342424,
        "firstName": "Matt",
        "lastName": "Heafy",
        "gender": "Male",
        "language": "English",
        "emails": [
            { email: "matt@email.com" }, 
            { email: "band@email.com" },
        ],
    }
} };

// which resolves here once we call the query
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));