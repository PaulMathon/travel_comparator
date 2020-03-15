import { ITravelController } from './ITravelController';
import { ILocationService } from '../services/LocationService';
import { Journey } from '../entities/specific/Journey';
import { IApiFactory } from '../api/ApiFactory';
import { City } from '../entities/specific/City';

export class TrainController implements ITravelController {

    constructor(
      private locationService: ILocationService,
      private trainApis: IApiFactory) {}

    public async getJourneys(cityIdFrom: string, cityIdTo: string, dateFrom: Date, dateTo?: Date): Promise<Journey[]> {
      const cityFrom: City = await this.locationService.getCity(cityIdFrom);
      const cityTo: City = await this.locationService.getCity(cityIdTo);
      const journeys: Journey[] = await this.trainApis.getJourneys(cityFrom, cityTo, dateFrom, dateTo);
      return journeys;
    }
}
