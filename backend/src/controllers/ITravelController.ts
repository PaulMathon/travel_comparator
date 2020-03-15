import { Journey } from '../entities/specific/Journey';
import { IGoyavError } from '../utils/GoyavError';

export interface ITravelController {
    
  getJourneys(cityIdFrom: string, cityIdTo: string, dateFrom: Date, dateTo?: Date): Promise<Journey[]>;

}
