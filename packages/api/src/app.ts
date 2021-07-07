import { PrismaClient } from '@prisma/client';
import { App } from 'uWebSockets.js';

const prisma = new PrismaClient();

const server = App();

async function main() {
  server.listen(1500, (socket) => {
    if (socket) console.log(`Up and running`, socket);
  });
}

main();