import DataUtils from '../utils/DataUtils';
import TravelApi, {WhereFromTo, GeoData} from './api';
import Train from '../entities/specific/Train';
import {
    GEO_DATA_API_VERSION,
    PARTNER_ID_KIWI,
    URL_KIWI
} from '../constants';

export default class KiwiApi implements TravelApi {

    geoData: GeoData;

    constructor() {
        this.geoData = <GeoData>DataUtils.readJSON('../../data/json/IATA.json');
    }

    async getAvailables(where: WhereFromTo, when: Date, maxResults: number): Promise<Train[]> {
        const opt = { method: 'GET' };
        const urlRequest = this.requestUrl(URL_KIWI, where, when);
        const availables = await fetch(urlRequest, opt);
        return availables.json();
    }
    
    requestUrl(baseUrl: string, where: WhereFromTo, when: Date): string {
        return `${baseUrl}/flights?flyFrom=${where.from}&to=${where.to}&dateFrom=${this.parseDate(when)}&partner=${PARTNER_ID_KIWI}&v=${GEO_DATA_API_VERSION}`;
    }

    private getIATA(place: string): string {
        const IATA = '';
        return IATA;
    }

    parseDate(date: Date): string {
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    }
}