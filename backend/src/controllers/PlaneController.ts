import { ITravelController } from './ITravelController';
import { City } from '../entities/specific/City';
import { Journey } from '../entities/specific/Journey';
import { IGoyavError, GoyavError } from '../utils/GoyavError';

export class PlaneController implements ITravelController {

  public async getJourneys(cityIdFrom: string, cityIdTo: string, dateFrom: Date, dateTo?: Date): Promise<Journey[]> {
    throw new GoyavError('NotImplemented', 'Method not implemented.');
  }

}
