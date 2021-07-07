import { App, DEDICATED_COMPRESSOR_3KB } from 'uWebSockets.js';

import { builder, Context } from './builder';

const schema = builder.toSchema({});

const server = App();

async function main() {
  server.ws('/graphql', {
    idleTimeout: 32,
    maxBackpressure: 1024,
    maxPayloadLength: 512,
    compression: DEDICATED_COMPRESSOR_3KB,
    
    message: (ws, msg, isBinary) => {
      console.log(msg);
    }
  });
  server.listen(1500, (socket) => {
    if (socket) console.log(`Up and running`, socket);
  });
}

main();