import { TravelApi } from './TravelApi';
import { KiwiApi } from './KiwiApi';
import { SncfApi } from './SncfApi';
import { City } from '../entities/specific/City';
import { IJourney } from '../entities/specific/Journey';

export interface IApiFactory {

  getJourneys(cityFrom: City, cityTo: City, dateFrom: Date, dateTo?: Date): Promise<IJourney[]>;

}

export class ApiFactory implements IApiFactory {

  private availableApis = [
    KiwiApi,
    SncfApi
  ];
  private apis: TravelApi[];

  constructor() {
    this.apis = this.initApis();
  }

  public async getJourneys(cityFrom: City, cityTo: City, dateFrom: Date, dateTo?: Date): Promise<IJourney[]> {
    const apiJourneys = await Promise.all(this.apis.map(api => api.getAvailables(cityFrom, cityTo, dateFrom)));
    const journeys = apiJourneys.reduce((acc, val) => acc.concat(val), []);
    return journeys;
  }

  private initApis(): TravelApi[] {
    return this.availableApis
      .map(Api => new Api());
  }
}
