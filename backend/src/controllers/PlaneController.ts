import { ITravelController } from './ITravelController';
import { City } from '../entities/specific/City';
import { Journey } from '../entities/specific/Journey';
import { Either, IGoyavError, GoyavError, left, right } from '../utils/Error';

export class PlaneController implements ITravelController {

  public async getJourneys(cityFrom: City, cityTo: City, dateFrom: Date, dateTo?: Date): Promise<Either<IGoyavError, Journey[]>> {
    return left(new GoyavError('NotImplemented', 'Method not implemented.'));
  }

}
