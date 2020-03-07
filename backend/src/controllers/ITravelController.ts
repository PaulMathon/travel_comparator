import { Journey } from "../entities/specific/Journey";
import { City } from "../entities/specific/City";

export interface ITravelController {
    
  getJourneys(cityFrom: City, cityTo: City, dateFrom: Date, dateTo?: Date): Journey[]

}
