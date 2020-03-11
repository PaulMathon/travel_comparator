import fetch from 'node-fetch';
import {JsonUtils} from '../utils/JsonUtils';
import {ApiType, TravelApi, WhereFromTo, GeoData} from './TravelApi';
import {City} from '../entities/specific/City';
import {Journey} from '../entities/specific/Journey';
import {
    GEO_DATA_API_VERSION,
    PARTNER_ID_KIWI,
    URL_KIWI
} from '../constants';

interface AirportsData {
    [city: string]: string
}
export class KiwiApi implements TravelApi {

  constructor() {
  }

  async getAvailables(cityFrom: City, cityTo: City, when: Date, maxResults: number=100): Promise<Journey[]> {
    const opt = { method: 'GET' };
    const urlRequest = this.requestUrl(URL_KIWI, cityFrom, cityTo, when);
    const availables = await fetch(urlRequest, opt);
    return availables.json();
  }
  
  public requestUrl(baseUrl: string, cityFrom: City, cityTo: City, when: Date): string {
    return `${baseUrl}/flights?flyFrom=${cityFrom.iaat}&to=${cityTo.iaat}&dateFrom=${this.parseDate(when)}&partner=${PARTNER_ID_KIWI}&v=${GEO_DATA_API_VERSION}`;
  }

  public parseDate(date: Date): string {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
  }

  static getType(): ApiType {
    return ApiType.plane;
  }
}
