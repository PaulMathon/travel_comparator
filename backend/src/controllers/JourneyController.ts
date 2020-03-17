import { IJourneyController } from './IJourneyController';
import { ILocationService } from '../services/LocationService';
import { IJourney } from '../entities/specific/Journey';
import { IApiFactory } from '../api/ApiFactory';
import { City } from '../entities/specific/City';

export class JourneyController implements IJourneyController {

    constructor(
      private locationService: ILocationService,
      private trainApis: IApiFactory) {}

    public async getJourneys(cityIdFrom: string, cityIdTo: string, dateFrom: Date, dateTo?: Date): Promise<IJourney[]> {

      const cityFrom: City = await this.locationService.getCity(cityIdFrom);
      const cityTo: City = await this.locationService.getCity(cityIdTo);

      const journeys: IJourney[] = await this.trainApis.getJourneys(cityFrom, cityTo, dateFrom, dateTo);

      return journeys;
    }
}
