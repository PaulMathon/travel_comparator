import fetch from 'node-fetch';
import {URL_SNCF, TOKEN_SNCF} from '../constants';
import {City} from '../entities/specific/City';
import {JsonUtils} from '../utils/JsonUtils';
import {Journey} from '../entities/specific/Journey';
import {ApiType, TravelApi,WhereFromTo, GeoData} from './TravelApi';
import Token from '../entities/api/Token';
import {LocationService} from '../services/LocationService';

/**
 * Documentation: http://doc.navitia.io/
 */
export class SncfApi implements TravelApi {

  geoData: GeoData;

  constructor() {
      this.geoData = <GeoData>JsonUtils.readJson('data/json/commune.json');
  }

  async getAvailables(cityFrom: City, cityTo: City, when: Date, maxResults: number = 100): Promise<Journey[]> {
    const opt = {
        headers: {'Authorization': TOKEN_SNCF},
        method: 'GET'
    };
    const urlRequest = this.requestUrl(URL_SNCF, cityFrom, cityTo, when);
    const availables = await fetch(urlRequest, opt);
    return availables.json();
  }

  /* parseData(data): Train[] {
      const trains = [];

  } */

  public requestUrl(baseUrl: string, cityFrom: City, cityTo: City, when: Date): string {
      return `${baseUrl}/coverage/sncf/journeys?from=admin:fr:${cityFrom.postalCode}&to=admin:fr:${cityTo.postalCode}&datetime=${this.parseDate(when)}`
  }

  public getPlace() {
      
  }

  /**
   * Format example: 20191214T104643
   */
  public parseDate(date: Date) {
      return `${date.getFullYear()}${('0' + (date.getMonth()+1)).slice(-2)}${('0' + date.getDate()).slice(-2)}T${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
  }

  static getType(): ApiType {
    return ApiType.train;
  }
}
