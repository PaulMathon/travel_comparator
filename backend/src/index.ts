import {App} from './app';
import {RoutesFactory} from './workers/RoutesFactory';
import { LocationService } from './services/LocationService';
import { AirportProvider } from './providers/AirportProvider';
import { CityProvider } from './providers/CityProvider';
import { ApiFactory } from './api/ApiFactory';
import { ApiType } from './api/TravelApi';

const airportProvider = new AirportProvider();
const cityProvider = new CityProvider();
const locationService = new LocationService(
  airportProvider,
  cityProvider
);

const trainApiFactory = new ApiFactory(ApiType.train);
const planeApiFactory = new ApiFactory(ApiType.plane);

const routes = new RoutesFactory(
    locationService,
    trainApiFactory,
    planeApiFactory
  );

const app = new App(routes);
app.start();
