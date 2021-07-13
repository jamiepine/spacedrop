import SchemaBuilder from "@giraphql/core";
import SimpleObjectsPlugin from "@giraphql/plugin-simple-objects";
// import DataloaderPlugin from "@giraphql/plugin-dataloader";
import ValidationPlugin from "@giraphql/plugin-validation";
import ScopeAuthPlugin from "@giraphql/plugin-scope-auth";
import ErrorsPlugin from "@giraphql/plugin-errors";

import { GraphQLJSONObject } from "graphql-scalars";
import { FastifyRequest, FastifyReply } from "fastify";

export interface Context {
  req: FastifyRequest;
  res: FastifyReply<any>;
}

const builder = new SchemaBuilder<{
  // We change the defaults for arguments to be `required`. Any non-required
  // argument can be set to `required: false`.
  DefaultInputFieldRequiredness: true;
  Context: Context;
  Scalars: {
    DateTime: { Input: Date; Output: Date };
    JSONObject: { Input: Record<string, unknown>; Output: object };
    BigInt: { Input: bigint; Output: number };
  };
  AuthScopes: {
    authenticated: boolean;
  };
}>({
  defaultInputFieldRequiredness: true,
  plugins: [
    ErrorsPlugin,
    ScopeAuthPlugin,
    ValidationPlugin,
    SimpleObjectsPlugin,
  ],
  authScopes(ctx): { authenticated: boolean } {
    return { authenticated: false };
  },
});

export default builder;

// This initializes the query and mutation types so that we can add fields to them dynamically:
builder.queryType({});
builder.mutationType({});
// builder.subscriptionType({});

// Provide the custom DateTime scalar that allows dates to be transmitted over GraphQL:
builder.scalarType("DateTime", {
  serialize: (date: Date) => date,
  parseValue: (date: string) => {
    return new Date(date);
  },
});

builder.scalarType("BigInt", {
  serialize: (i) => i,
  parseValue: (i) => i,
});

builder.addScalarType("JSONObject", GraphQLJSONObject, {});
