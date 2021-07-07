import uWS from "uWebSockets.js";
import { makeBehavior } from "graphql-ws/lib/use/uWebSockets";
import { builder } from "./builder";

import "./modules";

uWS
  .App()
  .ws("/graphql", makeBehavior({ schema: builder.toSchema({}) }))
  .get("/test", (res) => res.end("bruh"))
  .listen(1500, (socket) => {
    if (socket) console.log("Listening on port 1500");
  });
