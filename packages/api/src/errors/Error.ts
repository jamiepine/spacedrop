import builder from "~/builder";

export const ErrorInterface = builder.interfaceRef<Error>("Error").implement({
  fields: (t) => ({
    message: t.exposeString("message"),
  }),
});

builder.objectType(Error, {
  name: "BaseError",
  isTypeOf: (obj) => obj instanceof Error,
  interfaces: [ErrorInterface],
});
