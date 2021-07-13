import uWS from "uWebSockets.js";
import { makeBehavior } from "graphql-ws/lib/use/uWebSockets";
import builder from "./builder";

import "./modules";
import { UploadRoute } from "./modules/upload";

uWS
  .App()
  .ws("/graphql", makeBehavior({ schema: builder.toSchema({}) }))
  .post('/upload/:id', UploadRoute)
  .listen(1500, (socket) => {
    if (socket) console.log("Listening on port 1500");
    else throw 'Could not start server';
  });