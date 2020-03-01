import City from '../entities/specific/City';
import Train from '../entities/specific/Train';

export interface WhereFromTo {
    from: City,
    to: City
}

export interface GeoData {
    [city: string]: string | City
}

export default interface TravelApi {

    getAvailables(where: WhereFromTo, when: Date, maxResults: number): Promise<Train[]>;

    requestUrl(baseUrl: string, where: WhereFromTo, when: Date): string;

    parseDate(date: Date): string;

}