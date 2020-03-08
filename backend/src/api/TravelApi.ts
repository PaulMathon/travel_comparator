import {City} from '../entities/specific/City';
import {Journey} from '../entities/specific/Journey';

export enum ApiType {
  default = 'default',
  train = 'train',
  plane = 'plane'
}

export interface WhereFromTo {
    from: City,
    to: City
}

export interface GeoData {
    [city: string]: string | City
}

export interface TravelApi {

    getAvailables(cityWhere: City, cityTo: City, when: Date, maxResults?: number): Promise<Journey[]>;

    requestUrl(baseUrl: string, cityWhere: City, cityTo: City, when: Date): string;

    parseDate(date: Date): string;

}
