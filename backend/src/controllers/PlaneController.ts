import { ITravelController } from './ITravelController';
import { City } from '../entities/specific/City';
import { Journey } from '../entities/specific/Journey';
import { Either, IGoyavError, GoyavError, error, valid } from '../utils/GoyavError';

export class PlaneController implements ITravelController {

  public async getJourneys(cityIdFrom: string, cityIdTo: string,
    dateFrom: Date, dateTo?: Date): Promise<Either<IGoyavError, Journey[]>> {
    return error(new GoyavError('NotImplemented', 'Method not implemented.'));
  }

}
