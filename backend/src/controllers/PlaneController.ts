import {ITravelController} from './ITravelController';
import {City} from '../entities/specific/City';
import {Journey} from '../entities/specific/Journey';

export class PlaneController implements ITravelController {

  getJourneys(cityFrom: City, cityTo: City, dateFrom: Date, dateTo?: Date | undefined): Journey[] {
    throw new Error("Method not implemented.");
  }

}
