import { MY_CLIENT_ID } from "./state";

const base_server = "http://localhost:1500";

export async function sendPing () {
  try {
    console.log(`Ping for ${MY_CLIENT_ID.value}`);
    const payload = {
      clientId: MY_CLIENT_ID.value
    };
    await fetch(`http://localhost:1500/demo/ping`, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  } catch (error) {
    
  }
}