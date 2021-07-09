import builder from "~/builder";
import { ErrorInterface } from "./error";

export class BadCredentialsError extends Error {
  constructor() {
    super("Incorrect credentials provided");
  }
}

builder.objectType(BadCredentialsError, {
  name: "BadCredentialsError",
  interfaces: [ErrorInterface],
  isTypeOf: (o) => o instanceof BadCredentialsError,
});
