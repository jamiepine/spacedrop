import { state } from "@pulsejs/core";

export const KNOWN_CLIENTS = state<string[]>([]).persist('KNOWN_CLIENTS_ARRAY');
export const MY_CLIENT_ID = state<string>(`${Math.floor(Math.random() * 999999)}`).persist('MY_CLIENT_ID');