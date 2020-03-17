import { IJourney } from '../entities/specific/Journey';

export interface IJourneyController {
    
  getJourneys(cityIdFrom: string, cityIdTo: string, dateFrom: Date, dateTo?: Date): Promise<IJourney[]>;

}
