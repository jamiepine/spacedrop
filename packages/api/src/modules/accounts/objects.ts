import { builder } from "~/src/builder";

export const TestResult = builder.simpleObject('TestResult', {
  fields: (t) => ({
    hello: t.boolean(),
    goodbye: t.boolean()
  }),
});