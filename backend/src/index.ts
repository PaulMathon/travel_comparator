import { App } from './App';
import { RoutesFactory } from './workers/RoutesFactory';
import { LocationService } from './services/LocationService';
import { AirportProvider } from './providers/AirportProvider';
import { CityProvider } from './providers/CityProvider';
import { ApiFactory } from './api/ApiFactory';
import { ApiType } from './api/TravelApi';

// Providers and services
const airportProvider = new AirportProvider();
const cityProvider = new CityProvider();
const locationService = new LocationService(
  airportProvider,
  cityProvider
);

// Remote APIs
const trainApiFactory = new ApiFactory(ApiType.train);
const planeApiFactory = new ApiFactory(ApiType.plane);

// Routes
const routes = new RoutesFactory(
    locationService,
    trainApiFactory,
    planeApiFactory
  );

// App
const app = new App(routes);
app.start();
