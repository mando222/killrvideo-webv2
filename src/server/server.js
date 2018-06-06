const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema')

//Set app variable
const app = express();

//setup endpoints and params
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

//start server on port 4000 and display start msg in console
app.listen(4000, () => {
    console.log('Running a GraphQL API server at localhost:4000/graphql')
    }
);
