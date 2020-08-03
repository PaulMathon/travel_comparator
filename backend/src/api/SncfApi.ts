import fetch from 'node-fetch';
import { URL_SNCF, TOKEN_SNCF } from '../constants';
import { City } from '../entities/specific/City';
import { IJourney, EntityType } from '../entities/specific/Journey';
import { ApiType, ApiProvider, TravelApi, ApiResult } from './TravelApi';
import { HttpUtils } from '../utils/HttpUtils';
import { GoyavError } from '../utils/GoyavError';
import {v4 as uuid} from 'uuid';
import { isArray } from 'util';

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
    const rawJourneys = await HttpUtils.fetch(urlRequest, opt);
    console.log(rawJourneys);
    const journeys = rawJourneys.journeys.map((rawJourney: any) => this.parseJourneys(rawJourney));
    return journeys;
  }

  public static getType(): ApiType {
    return ApiType.train;
  }

  getProvider(): ApiProvider {
    return ApiProvider.sncf;
  }

  private requestUrl(baseUrl: string, cityFrom: City, cityTo: City, when: Date): string {
    return `${baseUrl}/coverage/sncf/journeys?from=admin:fr:${cityFrom.uic}&to=admin:fr:${cityTo.uic}&datetime=${this.parseDate(when)}`
    // return `${baseUrl}/coverage/sncf/journeys?from=stop_area:OCE:SA:87271494&to=stop_area:OCE:SA:87722744&datetime=${this.parseDate(when)}`
  }

  /**
   * Format example: 20191214T104643
   */
  private parseDate(dateAndTime: Date) {
    const date = `${dateAndTime.getFullYear()}${('0' + (dateAndTime.getMonth()+1)).slice(-2)}${('0' + dateAndTime.getDate()).slice(-2)}`;
    const time = `${dateAndTime.getHours()}${dateAndTime.getMinutes()}${dateAndTime.getSeconds()}`;
    return `${date}T${time}`;
  }

  private parseJourneys(rawJourney: any): IJourney {

    return {
      type: EntityType.journey,
      id: uuid(),
      legs: rawJourney.sections.map((section: any) => ({
        origin: {
          type: EntityType.station,
          id: this.findUic(section.from.stop_area.codes),
          name: section.from.stop_area.name,
          location: {
            type: "location",
            longitude: section.from.stop_area.coord.lon,
            latitude: section.from.stop_area.coord.lat
          }
        },
        destination: {
          type: EntityType.station,
          id: this.findUic(section.to.stop_area.codes),
          name: section.to.stop_area.name,
          location: {
            type: "location",
            longitude: section.to.stop_area.coord.lon,
            latitude: section.to.stop_area.coord.lat
          }
        },
        departure: "2017-03-16T20:00:00+01:00",
        departurePlatform: "4-1",
        departureDelay: null,
        arrival: "2017-03-17T15:00:00+02:00",
        arrivalPlatform: "9",
        arrivalDelay: 0,
        schedule: {
          type: "schedule",
          id: "1234",
          route: {
            type: "route",
            id: "123",
            line: {
              type: "line",
              id: "12",
              name: "Magic Intercontinental Express",
              mode: "train",
              operator: {
                type: "operator",
                id: "1",
                name: "1 Railways Inc."
              }
            },
            stops: [
              "10001",
              {
                type: "stop",
                id: "10002-a",
                station: {
                  type: "station",
                  id: "10002",
                  name: "Bar City Center"
                },
                name: "train station"
              },
              "10003"
            ]
          },
          mode: "train",
          sequence: [
            {
              departure: 0
            },
            {
              arrival: 3600,
              departure: 3720
            },
            {
              arrival: 64800
            }
          ],
          starts: [
            1489604400,
            1489690800,
            1489777200
          ]
        },
        stopovers: [{
          type: "stopover",
          stop: "10001",
          arrival: null,
          arrivalPlatform: null,
          departure: "2017-03-16T20:00:00+01:00",
          departurePlatform: "4-1",
          departureDelay: null
        }, {
          type: "stopover",
          top: "10002-a",
          arrival: "2017-03-16T21:01:30+01:00",
          arrivalPlatform: "C",
          arrivalDelay: 90,
          departure: "2017-03-16T21:03:00+01:00",
          departurePlatform: "C",
          departureDelay: 60
        }, {
          type: "stopover",
          stop: "10003",
          arrival: "2017-03-17T15:00:00+02:00",
          arrivalPlatform: "9",
          arrivalDelay: 0,
          departure: null,
          departurePlatform: null
        }],
        public: true,
        operator: {
          type: "operator",
          id: "2",
          name: "2 Replacement Railway Services Inc."
        },
        price: {
          amount: 19.95,
          currency: "EUR"
        }
      }),
      price: {
        amount: 19.95,
        currency: "EUR"
      }
    }
  }

  private findUic(codes: { type: string, value: string }[]): number {
    let uic;
    if (isArray(codes)) {
      const uicCode = codes.filter((code: any) => code.UIC8);
      if (uicCode.length === 1) {
        uic = uicCode[0].value;
      }
      throw new GoyavError('', '');
    } else {
      throw new GoyavError('', '');
    }
    return parseInt(uic);
  }

  private deserializeSncfDate(sncfDate: string): Date {
    const matches = this.sncfDateFormat.exec(sncfDate);
    if (matches.lenght < 7) {
      thow new GoyavError('', '');
    }
    const [, year, month, day, hours, minutes, seconds] =
    // 2020-03-22T22:07:28.828Z
    const dateAsStr = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000`;
    return new Date(dateAsStr);
  }
}
