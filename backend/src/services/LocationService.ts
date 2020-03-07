import {IAirportProvider} from '../providers/AirportProvider';
import {ICityProvider} from '../providers/CityProvider';
import {IError} from '../utils/Error';

export interface ILocationService {

}

export class LocationService implements ILocationService {

    constructor(
        private AirportProvider: IAirportProvider,
        private CityProvider: ICityProvider) {}

}
