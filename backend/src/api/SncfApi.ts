import fetch from 'node-fetch';
import { URL_SNCF, TOKEN_SNCF } from '../constants';
import { City } from '../entities/specific/City';
import { IJourney } from '../entities/specific/Journey';
import { ApiType, ApiProvider, TravelApi, ApiResult } from './TravelApi';
import { HttpUtils } from '../utils/HttpUtils';
import { GoyavError } from '../utils/GoyavError';

/**
 * Documentation: http://doc.navitia.io/
 */
export class SncfApi implements TravelApi {

  private sncfDateFormat = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})$/;

  async getAvailables(cityFrom: City, cityTo: City, when: Date, maxResults: number = 100): Promise<IJourney[]> {
    const opt = {
        headers: { authorization: TOKEN_SNCF },
        method: 'GET'
    };
    const urlRequest = this.requestUrl(URL_SNCF, cityFrom, cityTo, when);
    console.log('urlReq', urlRequest);
    const availables = await HttpUtils.fetch(urlRequest, opt);
    console.log(availables);
    const journeys = this.parseJourneys(availables.journeys);
    return journeys;
  }

  public static getType(): ApiType {
    return ApiType.train;
  }

  getProvider(): ApiProvider {
    return ApiProvider.sncf;
  }

  private requestUrl(baseUrl: string, cityFrom: City, cityTo: City, when: Date): string {
    //return `${baseUrl}/coverage/sncf/journeys?from=admin:fr:${cityFrom.zipCode}&to=admin:fr:${cityTo.zipCode}&datetime=${this.parseDate(when)}`
    return `${baseUrl}/coverage/sncf/journeys?from=admin:fr:75056&to=stop_area:OCE:SA:87393256&datetime=${this.parseDate(when)}`
  }

  /**
   * Format example: 20191214T104643
   */
  private parseDate(dateAndTime: Date) {
    const date = `${dateAndTime.getFullYear()}${('0' + (dateAndTime.getMonth()+1)).slice(-2)}${('0' + dateAndTime.getDate()).slice(-2)}`;
    const time = `${dateAndTime.getHours()}${dateAndTime.getMinutes()}${dateAndTime.getSeconds()}`;
    return `${date}T${time}`;
  }

  private parseJourneys(originalJourneys: any): IJourney[] {
    return originalJourneys.map(
      ({sections}: {sections: any}) => ({
        cityFrom: sections.from.administrative_region,
        cityTo: sections.to.administrative_region,
        startTimestamp: this.getTimestamp(sections.from.arrival_date_time),
        endTimestamp: this.getTimestamp(sections.to.arrival_date_time),
        co2: sections.co2_emission.value
      })
    );
  }

  private getTimestamp(sncfDate: string): number {
    const [, year, month, day, hours, min, sec] = this.sncfDateFormat.exec(sncfDate) || [];
    if (!year || !month || !day || !hours || !min || !sec) {
      throw new GoyavError(
        'ApiError',
        `Wrong date format received from SNCF API: ${sncfDate}`
      );
    }
    const strDate = `${year}-${month}-${day}T${hours}:${min}:${sec}`;
    const jsDate = new Date(strDate);
    return Date.parse(jsDate.toISOString())
  }
}
