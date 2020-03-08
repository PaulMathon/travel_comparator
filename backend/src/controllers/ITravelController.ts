import { Journey } from '../entities/specific/Journey';
import { City } from '../entities/specific/City';
import { Either, IGoyavError } from '../utils/Error';

export interface ITravelController {
    
  getJourneys(cityFrom: City, cityTo: City, dateFrom: Date, dateTo?: Date): Promise<Either<IGoyavError, Journey[]>>; 

}
