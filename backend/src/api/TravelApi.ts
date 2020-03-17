import { City } from '../entities/specific/City';
import { IJourney } from '../entities/specific/Journey';

export enum ApiType {
  default = 'default',
  train = 'train',
  plane = 'plane'
}

export enum ApiProvider {
  sncf = 'sncf',
  kiwi = 'kiwi'
}

export interface ApiResult {
  // requestId: string,
  type: ApiType,
  provider: ApiProvider,
  co2: number,
  // traveledDistance: number,
  cityFrom: City,
  cityTo: City,
  journeys: IJourney[]
}

export interface TravelApi {

    getAvailables(cityWhere: City, cityTo: City, when: Date, maxResults?: number): Promise<IJourney[]>;

}
