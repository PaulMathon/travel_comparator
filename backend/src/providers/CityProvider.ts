import { City } from '../entities/specific/City';
import { JsonUtils } from '../utils/JsonUtils';

interface CityDict {
  [cityId: string]: City
}

export interface ICityProvider {
    
  getCity(cityId: string): Promise<City>;

}

export class CityProvider implements ICityProvider {

  private cityJsonPath = 'data/json/commune.json';

  async getCity(cityId: string): Promise<City> {
    const cities = await JsonUtils.readJson(this.cityJsonPath) as CityDict;
    const city: City = cities[cityId.toLocaleUpperCase()];
    return city;
  }

}
