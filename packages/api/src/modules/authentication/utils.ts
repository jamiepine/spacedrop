import { v4 } from "uuid";
import { createHmac } from "crypto";
import { Account } from "@prisma/client";
import prisma from "~/prisma";
import redis from "~/redis";

const SESSION_EXPIRY = 60 * 60 * 24 * 14;
const SESSION_REGEX = /s\:(.+)\.(.+)/g;
export async function verifySession(session?: string | null) {
  if (!session) return null;

  const sessionMatch = SESSION_REGEX.exec(
    Buffer.from(session, "base64").toString("ascii")
  );

  if (!sessionMatch) return null;

  const [, token, signature] = sessionMatch;

  const signatureVerify = createHmac("sha256", process.env.SESSION_SECRET!)
    .update(token)
    .digest("hex");

  if (signature !== signatureVerify) return null;

  const username = await redis.get(`sessions/${token}`);

  console.log({username, key: `sessions/${token}`});

  if (!username) return null;

  const account = await prisma.account.findUnique({
    where: { username },
  });

  if (!account) return null;

  await redis.set(`sessions/${token}`, username, "EX", SESSION_EXPIRY);

  return account;
}

const DASH_REGEX = /-/g;
export async function createSession(account: Account) {
  const token = v4().replace(DASH_REGEX, "");
  
  console.log({token})

  const signature = createHmac("sha256", process.env.SESSION_SECRET!)
    .update(token)
    .digest("hex");

  await redis.set(`sessions/${token}`, account.username, "EX", SESSION_EXPIRY);

  return Buffer.from(`s:${token}.${signature}`).toString("base64");
}
