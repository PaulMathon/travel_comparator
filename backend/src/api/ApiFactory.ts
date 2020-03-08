import {TravelApi, ApiType} from './TravelApi';
import {KiwiApi} from './KiwiApi';
import {SncfApi} from './SncfApi';
import {City} from '../entities/specific/City';
import { Journey } from '../entities/specific/Journey';

export interface IApiFactory {

  getJourneys(cityFrom: City, cityTo: City, dateFrom: Date, dateTo?: Date): Promise<Journey[]>;

}

export class ApiFactory implements IApiFactory {

  private type: ApiType;
  private availableApis = [
    KiwiApi,
    SncfApi
  ];
  private apis: TravelApi[];

  constructor(type: ApiType = ApiType.default) {
    this.type = type;
    this. apis = this.initApis();
  }

  public async getJourneys(cityFrom: City, cityTo: City, dateFrom: Date, dateTo?: Date): Promise<Journey[]> {
    let journeys: Journey[] = [];
    for (let api of this.apis) {
      journeys = journeys.concat(await api.getAvailables(cityFrom, cityTo, dateFrom));
    }
    console.log('HELLLLO', journeys);
    return journeys;
  }

  private initApis(): TravelApi[] {
    return this.availableApis
      .filter(Api => this.type === ApiType.default || Api.getType() === this.type)
      .map(Api => new Api());
  }
}