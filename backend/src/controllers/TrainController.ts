import { ITravelController } from './ITravelController';
import { ILocationService } from '../services/LocationService';
import { IGoyavError, GoyavError, Either, left, right } from '../utils/Error';
import { Journey } from '../entities/specific/Journey';
import { City } from '../entities/specific/City';
import { IApiFactory } from '../api/ApiFactory';

export class TrainController implements ITravelController {

    constructor(
      private locationService: ILocationService,
      private trainApis: IApiFactory) {}

    public async getJourneys(cityFrom: City, cityTo: City, dateFrom: Date, dateTo?: Date): Promise<Either<IGoyavError, Journey[]>> {
      try {
        const journeys = await this.trainApis.getJourneys(cityFrom, cityTo, dateFrom, dateTo);
        console.log('Train Controller', journeys);
        return right(journeys);
      } catch (err) {
        return left(new GoyavError('NotImplemented', 'Not implemented yet'));
      }
    }
}
