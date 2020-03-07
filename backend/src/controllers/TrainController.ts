import {Application, Request, Response, NextFunction} from 'express';
import {ITravelController} from './ITravelController';
import {ILocationService} from '../services/LocationService';
import {IError} from '../utils/Error';
import {Journey} from '../entities/specific/Journey';
import {City} from '../entities/specific/City';

export class TrainController implements ITravelController {

    constructor(private locationService: ILocationService) {}

    public getJourneys(cityFrom: City, cityTo: City, dateFrom: Date, dateTo?: Date): Journey[] {
      throw new Error('Not implemented yet');
    }
}
