import { ILocationProvider } from '../providers/LocationProvider';
import { City } from '../entities/specific/City';

export interface ILocationService {

  getCity(cityId: string): Promise<City>;

}

export class LocationService implements ILocationService {

  constructor(private cityProvider: ILocationProvider) {}

  async getCity(cityId: string): Promise<City> {
    const city = await this.cityProvider.getApiLocations(cityId);
    return city;
  }

}
