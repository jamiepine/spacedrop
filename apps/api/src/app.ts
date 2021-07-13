import uWS from "uWebSockets.js";
import db from "./database";
import { wsMessageHandler } from "./ws-handler";

const server = uWS.App();

server.ws('/*', {
  message: wsMessageHandler
});

async function api () {
  await db.$connect();
  await new Promise<void>((resolve, reject) => {
    server.listen(1500, (socket) => {
      if (socket) resolve();
      else reject();
    });
  });
  console.log(`[API] Up and running !`);
}

api();