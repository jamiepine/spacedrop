import { initCache } from "@rocketplay/cache";
import uWS from "uWebSockets.js";
import db from "./database";
import { pingRoute } from "./ping";
import { wsMessageHandler } from "./ws-handler";

const server = uWS.App();

server.ws('/*', {
  message: wsMessageHandler
});

server.post('/demo/ping', pingRoute);

async function api () {
  initCache({
    prefix: 'spacedrop-rckt-cache'
  });
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