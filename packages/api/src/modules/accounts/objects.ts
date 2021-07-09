import builder from "~/builder";

builder.objectType("Account", {
  fields: (t) => ({
    username: t.exposeString("username"),
  }),
});
