import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphQL/typeDefs.js";
import { resolvers } from "./graphQL/resolvers.js";

const app = express()

async function start() {
    const apolloServer = new ApolloServer({typeDefs, resolvers})
    await apolloServer.start()
    apolloServer.applyMiddleware({app})

    app.listen(8080, () => console.log("Server Up"))
}

start()

