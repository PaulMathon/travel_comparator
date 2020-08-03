import { City } from '../entities/specific/City';
import { JsonUtils } from '../utils/JsonUtils';
import { HttpUtils } from '../utils/HttpUtils';

interface CityDict {
  [cityId: string]: City
}

interface apiLocations {
  [cityId: string]: string
}

export interface ILocationProvider {
    
  getApiLocations(cityId: string): Promise<City>;

}

export class LocationProvider implements ILocationProvider {

  private cityJsonPath = 'data/json/commune.json';

  async getApiLocations(cityId: string): Promise<City> {
    const cities = await JsonUtils.readJson(this.cityJsonPath) as CityDict;
    const city: City = cities[cityId.toLocaleUpperCase()];
    return city;
  }

  private async getSncfStation(cityId: string): Promise<string> {
    const endpoint = `https://booking.oui.sncf/widget/autocomplete-d2d?userCountry=fr-FR&searchField=origin&searchTerm=${cityId}`;
    const opt = { method: 'GET' }
    const results = await HttpUtils.fetch(endpoint, opt);
    const stations = results.filter((result: any) => result.category === 'station')
    return stations.map((station: any) => station.value);
  }

}
