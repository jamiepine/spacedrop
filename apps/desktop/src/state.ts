import { state } from "@pulsejs/core";

export const KNOWN_CLIENTS = state<string[]>([]).persist('KNOWN_CLIENTS_ARRAY');
export const MY_CLIENT_ID = state<string>('').persist('MY_CLIENT_ID');