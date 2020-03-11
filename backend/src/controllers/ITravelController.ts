import { Journey } from '../entities/specific/Journey';
import { Either, IGoyavError } from '../utils/GoyavError';

export interface ITravelController {
    
  getJourneys(cityIdFrom: string, cityIdTo: string, dateFrom: Date, dateTo?: Date): Promise<Either<IGoyavError, Journey[]>>; 

}
