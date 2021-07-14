const uri = 'ws://localhost:1500';

export interface ActionReturn {
  status: number | string;
  data?: any;
}

export class SpaceLink {
  public ready: boolean;
  // @ts-ignore
  public client: WebSocket;
  public listeners: {
    [key: string]: Function[];
  } = {};

  constructor () {
    this.ready = false;
    this.connect();
  }

  private connect () {
    this.client = new WebSocket(uri);
    this.client.onopen = () => {
      console.log(`[Link] ws open, ready for events !`);
      this.ready = true;
    }
    this.client.onclose = () => {
      this.ready = false;
    }
    this.client.onerror = () => {
      this.ready = false;
    }
    this.Listen();
    this.globalBind();
  }

  public async Call (action: string, payload: any): Promise<ActionReturn> {
    return await new Promise(async (resolve) => {
      // if (!await this.waitForReady()) return resolve({ status: 'timeout', data: '' });
      this.client.send(JSON.stringify({
        action,
        data: payload
      }))
      let to = setTimeout(() => (resolve({ status: 'timeout', data: '' })), 30000);
      const onReturn = (data: any) => {
        clearTimeout(to);
        this.off(action, onReturn);
        if (!data) data = { status: 'unknown', data: 'nothing_returned' };
        return resolve(data);
      };
      this.on(`${action}-return`, onReturn);
    });
  }

  public Listen () {
    this.client.onmessage = (msg) => {
      try {
        const { action, data } = JSON.parse(msg.data);
        const handlers = this.listeners[action];
        if (handlers && handlers.length > 0) {
          for (const func of handlers) {
            func(data);
          }
        }
      } catch (error) {
        
      }
    }
  }

  public on (event: string, callback: Function) {
    if (!this.listeners[event]) this.listeners[event] = [];
    if (!this.listeners[event].includes(callback)) this.listeners[event].push(callback);
    this.Listen();
  }

  public off (event: string, callback?: Function) {
    if (this.listeners[event]) {
      if (callback) {
        if (this.listeners[event].includes(callback)) this.listeners[event].splice(this.listeners[event].indexOf(callback), 1);
      } else {
        // @ts-ignore
        this.listeners[event] = undefined;
      }
    }
  }

  

  private globalBind () {
    try {
      // @ts-ignore
      globalThis.__space_link__ = SpaceLink;
      // @ts-ignore
      globalThis.__space_link__app = this;
    } catch (error) {
      console.log('bing error', error);
      // fail silently
    }
  }
}

export function spaceLink (): SpaceLink {
  // @ts-ignore
  if (globalThis.__space_link__app) return globalThis.__space_link__app
  const link = new SpaceLink;
  return link;
}

export async function call (action: string, payload: any) {
  console.log('[call]', action);
  return await spaceLink().Call(action, payload);
}