import dotenv from 'dotenv';

dotenv.config();

export interface ProcessEnv {
    [key: string]: string | undefined
}

let env = process.env["NODE_ENV"];

export const URL_SNCF = process.env.URL_SNCF || 'https://api.sncf.com/v1';
export const TOKEN_SNCF = process.env.TOKEN_SNCF || '';

export const URL_KIWI = process.env.URL_KIWI || 'https://api.skypicker.com';
export const PARTNER_ID_KIWI = process.env.PARTNER_ID_KIWI || '';
export const GEO_DATA_API_VERSION = process.env.GEO_DATA_API_VERSION || '3';