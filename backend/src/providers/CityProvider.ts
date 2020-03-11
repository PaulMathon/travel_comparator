import { City } from '../entities/specific/City';
import { JsonUtils } from '../utils/JsonUtils';
import { IGoyavError, Either, error, valid } from '../utils/GoyavError';

interface CityDict {
  [cityId: string]: City
}

export interface ICityProvider {
    
  getCity(cityId: string): Promise<Either<IGoyavError, City>>;

}

export class CityProvider implements ICityProvider {

  private cityJsonPath = 'data/json/commune.json';

  async getCity(cityId: string): Promise<Either<IGoyavError, City>> {
    const cities = await JsonUtils.readJson(this.cityJsonPath);
    if (cities.isError()) {
      return error(cities.value);
    }
    const cityDict = cities.value as CityDict;
    const city: City = cityDict[cityId.toLocaleUpperCase()];
    return valid(city);
  }

}
