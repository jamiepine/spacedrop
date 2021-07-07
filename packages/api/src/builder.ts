import SchemaBuilder from '@giraphql/core';
import SimpleObjectsPlugin from '@giraphql/plugin-simple-objects';
import DataloaderPlugin from '@giraphql/plugin-dataloader';
import ValidationPlugin from '@giraphql/plugin-validation';
import ScopeAuthPlugin from '@giraphql/plugin-scope-auth';

import { GraphQLJSONObject } from 'graphql-scalars';
import { Response, Request } from 'express';

export interface Context {
  req: Request;
  res: Response;
}

export const builder = new SchemaBuilder<{
  // We change the defaults for arguments to be `required`. Any non-required
  // argument can be set to `required: false`.
  DefaultInputFieldRequiredness: true;
  Context: Context;
  Scalars: {
    DateTime: { Input: Date; Output: Date };
    JSONObject: { Input: Record<string, unknown>; Output: object };
    BigInt: { Input: bigint; Output: number };
  };
  Objects: { 
    
   };

  // Define the shape of the auth scopes that we'll be using:
  AuthScopes: {
    authenticated: boolean;
  };
}>({
  defaultInputFieldRequiredness: true,
  plugins: [ScopeAuthPlugin, SimpleObjectsPlugin, ValidationPlugin, DataloaderPlugin],
  authScopes(): { authenticated: boolean } {
    return { authenticated: false };
  }
});

// This initializes the query and mutation types so that we can add fields to them dynamically:
builder.queryType({});
builder.mutationType({});
// builder.subscriptionType({});

// Provide the custom DateTime scalar that allows dates to be transmitted over GraphQL:
builder.scalarType('DateTime', {
  serialize: (date: Date) => date,
  parseValue: (date: string) => {
    return new Date(date);
  },
});

builder.scalarType('BigInt', {
  serialize: (i) => i,
  parseValue: (i) => i,
});

builder.addScalarType('JSONObject', GraphQLJSONObject, {});