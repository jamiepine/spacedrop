import uWS from "uWebSockets.js";

export async function wsMessageHandler (ws: uWS.WebSocket, message: ArrayBuffer, isBinary: boolean) {
  try {
    const parsed = JSON.parse(Buffer.from(message).toString());
    console.log(parsed);
  } catch (error) {
    
  }
}