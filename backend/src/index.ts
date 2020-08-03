import { App } from './App';
import { RoutesFactory } from './workers/RoutesFactory';
import { LocationService } from './services/LocationService';
import { LocationProvider } from './providers/LocationProvider';
import { ApiFactory } from './api/ApiFactory';
import { ApiType } from './api/TravelApi';
import { Logger } from './utils/Logger';
import { Config } from './config';

// Config
const config = new Config().getServerConfig();

// Providers and services
const locationProvider = new LocationProvider();
const locationService = new LocationService(locationProvider);

// Remote APIs
const apiFactory = new ApiFactory();

// Routes
const routes = new RoutesFactory(
    locationService,
    apiFactory,
    config
  );

// Technicals
const logger = new Logger(config.logLevel);

// App
const app = new App(routes, logger);
app.start();
