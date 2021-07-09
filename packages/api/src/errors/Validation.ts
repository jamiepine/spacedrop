import builder from "~/builder";
import { ErrorInterface } from "./error";

export class ValidationError extends Error {
  name = "ValidationError";
  properties: { name: string; message: string }[];

  constructor(message: string, properties: Record<string, string>) {
    super(message);

    this.properties = Object.entries(properties).map(([name, message]) => ({
      name,
      message,
    }));
  }
}

const ValidationErrorItem = builder.simpleObject("ValidationErrorProperty", {
  fields: (t) => ({
    name: t.string(),
    message: t.string(),
  }),
});

builder.objectType(ValidationError, {
  name: "ValidationError",
  interfaces: [ErrorInterface],
  isTypeOf: (o) => o instanceof ValidationError,
  fields: (t) => ({
    properties: t.field({
      type: [ValidationErrorItem],
      resolve: (e) => e.properties,
    }),
  }),
});
