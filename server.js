const path = require('path')
const express = require('express');

const { ApolloServer } = require('apollo-server-express');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql'],
});

const resolverArray = loadFilesSync(path.join(__dirname, '**/*.resolver.js'))

async function startApolloServer() {
    const app = express();
    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolverArray
    })

    const server = new ApolloServer({
        schema
    });

    await server.start();

    server.applyMiddleware({app , path: '/graphql'})
    
    app.listen(3000, () => {
        console.log('Running GrapQL Server on 3000')
    })

}

startApolloServer();




