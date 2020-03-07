import fetch from 'node-fetch';
import {JsonUtils} from '../utils/JsonUtils';
import TravelApi, {WhereFromTo, GeoData} from './TravelApi';
import {Journey} from '../entities/specific/Journey';
import {
    GEO_DATA_API_VERSION,
    PARTNER_ID_KIWI,
    URL_KIWI
} from '../constants';

interface AirportsData {
    [city: string]: string
}
export default class KiwiApi implements TravelApi {

    geoData: AirportsData;

    constructor() {
        this.geoData = <AirportsData>JsonUtils.readJson('data/json/IATA.json');
    }

    async getAvailables(where: WhereFromTo, when: Date, maxResults: number=100): Promise<Journey[]> {
        const opt = { method: 'GET' };
        const urlRequest = this.requestUrl(URL_KIWI, where, when);
        const availables = await fetch(urlRequest, opt);
        return availables.json();
    }
    
    requestUrl(baseUrl: string, where: WhereFromTo, when: Date): string {
        return `${baseUrl}/flights?flyFrom=${this.getIATA(where.from.name)}&to=${this.getIATA(where.to.name)}&dateFrom=${this.parseDate(when)}&partner=${PARTNER_ID_KIWI}&v=${GEO_DATA_API_VERSION}`;
    }

    private getIATA(place: string): string {
        return this.geoData[place];
    }

    parseDate(date: Date): string {
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    }
}
