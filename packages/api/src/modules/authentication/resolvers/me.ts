import builder from "~/builder";

builder.queryField("me", (t) =>
  t.field({
    type: "Account",
    authScopes: {
      authenticated: true,
    },
    resolve: (_root, _args, { account }) => account,
  })
);
