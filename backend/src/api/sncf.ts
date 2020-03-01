import fetch from 'node-fetch';
import {URL_SNCF, TOKEN_SNCF} from '../constants';
import City from '../entities/specific/City';
import DataUtils from '../utils/DataUtils';
import Train from '../entities/specific/Train';
import TravelApi, {WhereFromTo, GeoData} from './api';
import Token from '../entities/api/Token';

/**
 * Documentation: http://doc.navitia.io/
 */
export default class ApiSNCF implements TravelApi {

    geoData: GeoData;

    constructor() {
        this.geoData = <GeoData>DataUtils.readJSON('../../data/json/commune.json');
    }

    async getAvailables(where: WhereFromTo, when: Date, maxResults: number = 100): Promise<Train[]> {
        const opt = {
            headers: {'Authorization': TOKEN_SNCF},
            method: 'GET'
        };
        const urlRequest = this.requestUrl(URL_SNCF, where, when);
        const availables = await fetch(urlRequest, opt);
        return availables.json();
    }

    /* parseData(data): Train[] {
        const trains = [];

    } */

    requestUrl(baseUrl: string, where: WhereFromTo, when: Date): string {
        return `${baseUrl}/coverage/sncf/journeys?from=admin:fr:${where.from.postalCode}&to=admin:fr:${where.to.postalCode}&datetime=${this.parseDate(when)}`
    }

    getPlace() {
        
    }

    /**
     * Format example: 20191214T104643
     */
    parseDate(date: Date) {
        return `${date.getFullYear()}${('0' + (date.getMonth()+1)).slice(-2)}${('0' + date.getDate()).slice(-2)}T${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
    }
}
