import uWS from "uWebSockets.js";
import actions from './ws-actions';

export async function wsMessageHandler (ws: uWS.WebSocket, message: ArrayBuffer, isBinary: boolean) {
  try {
    const parsed = JSON.parse(Buffer.from(message).toString());
    const { action, payload }: { action: string; payload: any; } = parsed;
    // @ts-ignore
    const runnable = actions[action];
    if (runnable) {
      try {
        const result = await runnable(payload);
        if (result) ws.send(JSON.stringify({
          action: `${action}-return`,
          data: result
        }), isBinary);        
      } catch (error) {
        console.log(error);
        ws.send(JSON.stringify({
          action: `${action}-return`,
          data: {
            status: 'error'
          }
        }), isBinary);
      }
    }
  } catch (error) {
    console.log('ws error', error);
  }
}