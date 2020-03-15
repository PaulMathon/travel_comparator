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

  constructor() {
  }

  async getAvailables(cityFrom: City, cityTo: City, when: Date, maxResults: number = 100): Promise<Journey[]> {
    const opt = {
        headers: {'Authorization': TOKEN_SNCF},
        method: 'GET'
    };
    const urlRequest = this.requestUrl(URL_SNCF, cityFrom, cityTo, when);
    const availables = await fetch(urlRequest, opt);
    throw new Error('halo');
    return availables.json();
  }

  /* parseData(data): Train[] {
      const trains = [];

  } */

  public requestUrl(baseUrl: string, cityFrom: City, cityTo: City, when: Date): string {
    return `${baseUrl}/coverage/sncf/journeys?from=admin:fr:${cityFrom.zipCode}&to=admin:fr:${cityTo.zipCode}&datetime=${this.parseDate(when)}`
  }

  public getPlace() {
      
  }

  /**
   * Format example: 20191214T104643
   */
  public parseDate(dateAndTime: Date) {
    const date = `${dateAndTime.getFullYear()}${('0' + (dateAndTime.getMonth()+1)).slice(-2)}${('0' + dateAndTime.getDate()).slice(-2)}`;
    const time = `${dateAndTime.getHours()}${dateAndTime.getMinutes()}${dateAndTime.getSeconds()}`;
    return `${date}T${time}`;
  }

  static getType(): ApiType {
    return ApiType.train;
  }
}
