import builder from "~/builder";

export const AuthSuccess = builder.simpleObject("LoginSuccess", {
  fields: (t) => ({
    session: t.string(),
    account: t.field({ type: "Account" }),
  }),
});
