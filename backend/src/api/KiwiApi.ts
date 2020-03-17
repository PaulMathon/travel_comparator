import { HttpUtils } from '../utils/HttpUtils';
import { ApiType, TravelApi, ApiProvider } from './TravelApi';
import { IJourney } from '../entities/specific/Journey';
import { City } from '../entities/specific/City';
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

  async getAvailables(cityFrom: City, cityTo: City, when: Date, maxResults: number=100): Promise<IJourney[]> {
    const opt = { method: 'GET' };
    const urlRequest = this.requestUrl(URL_KIWI, cityFrom, cityTo, when);
    const availables = await HttpUtils.fetch(urlRequest, opt);
    console.log('HELLO', availables.message[0].errors);
    return availables;
  }

  public static getType(): ApiType {
    return ApiType.plane;
  }

  getProvider(): ApiProvider {
    return ApiProvider.kiwi;
  }
  
  private requestUrl(baseUrl: string, cityFrom: City, cityTo: City, when: Date): string {
    return `${baseUrl}/flights?flyFrom=${cityFrom.iaat}&to=${cityTo.iaat}&dateFrom=${this.parseDate(when)}&partner=${PARTNER_ID_KIWI}&v=${GEO_DATA_API_VERSION}`;
  }

  private parseDate(date: Date): string {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
  }

}
