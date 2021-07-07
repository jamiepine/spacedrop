import path from 'path';
import fs from 'fs';
import { printSchema, lexicographicSortSchema } from 'graphql';
import { builder } from '../src/builder';
import '../src/modules';

export const schema = builder.toSchema({});
const schemaAsString = printSchema(lexicographicSortSchema(schema));

if (process.env.NODE_ENV !== 'production') {
  fs.writeFileSync(path.join(__dirname, '../../..', 'schema.graphql'), schemaAsString);
}