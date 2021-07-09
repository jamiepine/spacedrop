import builder from "~/builder";
import { ErrorInterface } from "./error";

export class NotFoundError extends Error {
  name = "NotFoundError";

  constructor(
    public type: string,
    public property: string,
    public value: string
  ) {
    super(`${type} with ${property} ${value} not found`);
  }
}
builder.objectType(NotFoundError, {
  name: "NotFoundError",
  interfaces: [ErrorInterface],
  isTypeOf: (o) => o instanceof NotFoundError,
});
