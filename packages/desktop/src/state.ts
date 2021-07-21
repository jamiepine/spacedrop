import { state } from '@pulsejs/core';
import { generateClientId } from './logic/utils';

export const KNOWN_CLIENTS = state<string[]>([]).persist('KNOWN_CLIENTS_ARRAY');
export const MY_CLIENT_ID = state<string>(generateClientId()).persist('MY_CLIENT_ID');
