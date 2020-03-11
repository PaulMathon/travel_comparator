import {IAAT} from './IAAT';

interface ICityOptionalParams {
  inseeName?: number;
  gpsCoordinates?: Array<number>;
  iaat?: IAAT;
}


interface ICity {
    name: string;
    zipCode: number;
    inseeName?: number;
    gpsCoordinates?: Array<number>;
    iaat?: IAAT;
}

export class City implements ICity {

  name: string;
  zipCode: number;
  inseeName?: number | undefined;
  gpsCoordinates?: number[] | undefined;
  iaat?: IAAT | undefined;

  constructor(name: string, zipCode: number, optionalParams?: ICityOptionalParams) {
    this.name = name;
    this.zipCode = zipCode;
    this.inseeName = optionalParams?.inseeName;
    this.gpsCoordinates = optionalParams?.gpsCoordinates;
    this.iaat = optionalParams?.iaat;
  }
}
