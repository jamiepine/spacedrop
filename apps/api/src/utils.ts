import { HttpResponse } from "uWebSockets.js";

type TPromiseObjectNull = Promise<{ [key: string]: any } | null>;

export async function readJson (res: HttpResponse) {
  return new Promise((resolve, reject) => {
    let buffer: any;

    res.onData((ab, isLast) => {
      const chunk = Buffer.from(ab);
      
      if (isLast) {
        const toParse = buffer
          ? Buffer.concat([buffer, chunk])
          : chunk;
        const resolveValue = JSON.parse(toParse as unknown as string);
        resolve(resolveValue);
      } else {
        const concatValue = buffer
          ? [buffer, chunk]
          : [chunk];
        buffer = Buffer.concat(concatValue);
      }
    });
    res.onAborted(() => reject(null));
  });
}