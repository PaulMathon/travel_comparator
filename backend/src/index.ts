import {App} from './app';
import {RoutesFactory} from './workers/RoutesFactory';
import { LocationService } from './services/LocationService';
import { AirportProvider } from './providers/AirportProvider';
import { CityProvider } from './providers/CityProvider';

const airportProvider = new AirportProvider();
const cityProvider = new CityProvider();
const locationService = new LocationService(airportProvider, cityProvider);
const routes = new RoutesFactory(locationService);

const app = new App(routes);
app.start();
