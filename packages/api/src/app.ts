require('dotenv').config()
import "./modules";
import Koa from "koa";
import { ApolloServer } from "apollo-server-koa";
import builder, { Context } from "./builder";
import { verifySession } from "./modules/authentication";

const BEARER_REGEX = /[Bb]earer/g;

const schema = builder.toSchema({});

const app = new Koa();

const server = new ApolloServer({
  schema,
  context: async ({ ctx: { req, res, connection } }): Promise<Context> => {
    if (connection) return connection.context as any;

    const session = (req.headers.authorization ?? "")
      .replace(BEARER_REGEX, "")
      .replace(" ", "");

    return {
      req,
      res,
      // Any operations that don't requre authention won't touch the account objectm
      // so assume it exists for all other requests
      account: (await verifySession(session))!,
    };
  },
  introspection: true,
  playground: process.env.NODE_ENV !== "production",
});

server.applyMiddleware({ app });

const httpServer = app.listen(4001);

server.installSubscriptionHandlers(httpServer);
