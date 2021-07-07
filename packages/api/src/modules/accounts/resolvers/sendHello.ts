import { builder } from "../../../builder";

builder.mutationField("TestMutation", (t) =>
  t.field({
    type: "String",
    resolve: () => "hello !",
  })
);
