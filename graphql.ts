import { PubSub } from "apollo-server";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./resolvers";
import { schema } from "./schemas";
import { context } from "./context";
import express from "express";
import http from "http";
import dotenv from "dotenv";
dotenv.config();

const port: string = process.env.PORT as string;

export const pubsub = new PubSub();

let apolloServer;

export const run = async () => {
  /**
   * @description holds and creates apollo server
   */
  apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: context,
    playground: {
      endpoint: "/graphql",
    },
    introspection: true,
  });

  const app = express();
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  const httpServer = http.createServer(app);
  apolloServer.installSubscriptionHandlers(httpServer);

  httpServer.listen({ port }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${port}${apolloServer.graphqlPath}`
    )
  );
};

export default apolloServer;
