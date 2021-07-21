import { cacheItem, getCached } from '@rocketplay/cache';
import { HttpRequest, HttpResponse } from 'uWebSockets.js';
import { readJson } from './utils';

export async function pingRoute (res: HttpResponse, req: HttpRequest) {
  try {
    const body: any = await readJson(res);
    console.log(body);
    const { clientId } = body;
    if (clientId) await markClientOnline(clientId);
    res.end(JSON.stringify({ ok: true }));
  } catch (error) {
    console.log('oh no', error);
    res.end(JSON.stringify({ ok: false }));
  }
}

const makeClientOnlineKey = (id: string) => (`client-${id}-online`);

export async function markClientOnline (clientId: string) {
  await cacheItem(makeClientOnlineKey(clientId), true, 5*60);
}

export async function isClientOnline (clientId: string) {
  return await getCached(makeClientOnlineKey(clientId));
}