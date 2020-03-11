import { IAirportProvider } from '../providers/AirportProvider';
import { ICityProvider } from '../providers/CityProvider';
import { IGoyavError, Either } from '../utils/GoyavError';
import { City } from '../entities/specific/City';

export interface ILocationService {

  getCity(cityId: string): Promise<Either<IGoyavError, City>>;

}

export class LocationService implements ILocationService {

  constructor(
    private airportProvider: IAirportProvider,
    private cityProvider: ICityProvider) {}
    
  async getCity(cityId: string): Promise<Either<IGoyavError, City>> {
    const city = await this.cityProvider.getCity(cityId);
    return city;
  }

}
