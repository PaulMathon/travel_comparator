import {City} from '../entities/specific/City';
import {Journey} from '../entities/specific/Journey';

export interface WhereFromTo {
    from: City,
    to: City
}

export interface GeoData {
    [city: string]: string | City
}

export default interface TravelApi {

    getAvailables(where: WhereFromTo, when: Date, maxResults: number): Promise<Journey[]>;

    requestUrl(baseUrl: string, where: WhereFromTo, when: Date): string;

    parseDate(date: Date): string;

}
