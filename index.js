import express from 'express';
//updating to run graphql
import graphqlHTTP from 'express-graphql';
import schema from './schema';
// adding in our new resolvers file
import resolvers from './resolvers'

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = resolvers;

// which resolves here once we call the query
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));