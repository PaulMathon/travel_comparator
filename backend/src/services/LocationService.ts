import {IAirportProvider} from '../providers/AirportProvider';
import {ICityProvider} from '../providers/CityProvider';
import {IGoyavError} from '../utils/Error';

export interface ILocationService {

}

export class LocationService implements ILocationService {

    constructor(
        private airportProvider: IAirportProvider,
        private cityProvider: ICityProvider) {}

}
