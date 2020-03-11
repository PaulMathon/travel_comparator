import { ITravelController } from './ITravelController';
import { ILocationService } from '../services/LocationService';
import { IGoyavError, GoyavError, Either, error, valid } from '../utils/GoyavError';
import { Journey } from '../entities/specific/Journey';
import { City } from '../entities/specific/City';
import { IApiFactory } from '../api/ApiFactory';

export class TrainController implements ITravelController {

    constructor(
      private locationService: ILocationService,
      private trainApis: IApiFactory) {}

    public async getJourneys(cityIdFrom: string, cityIdTo: string, dateFrom: Date, dateTo?: Date): Promise<Either<IGoyavError, Journey[]>> {
      const cityFrom = await this.locationService.getCity(cityIdFrom);
      if (cityFrom.isError()) {
        return error(cityFrom.value);
      }
      const cityTo = await this.locationService.getCity(cityIdTo);
      if (cityTo.isError()) {
        return error(cityTo.value);
      }
      const journeys = await this.trainApis.getJourneys(cityFrom.value, cityTo.value, dateFrom, dateTo);
      return valid(journeys);
    }
}
