import { port } from '../../src/constants';
import { App } from '../../src/App';
import { RoutesFactory } from '../../src/workers/RoutesFactory';
import { LocationService } from '../../src/services/LocationService';
import { AirportProvider } from '../../src/providers/AirportProvider';
import { CityProvider } from '../../src/providers/CityProvider';
import { ApiFactory } from '../../src/api/ApiFactory';
import { ApiType } from '../../src/api/TravelApi';
import { Logger } from '../../src/utils/Logger';
import { Config } from '../../src/config/Config';

export class ServerUtils {

  static backendUrl = `http://localhost:${port}`;
  static testApp: App;

  static startTestServer() {
    this.testApp = this.buildTestApp();
    return this.testApp.start();
  }

  static stopTestServer() {
    return this.testApp.stop();
  }

  private static buildTestApp(): App {
    // Config
    const config = new Config();

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

    // Technicals
    const logger = new Logger(config.logLevel);

    // App
    const app = new App(routes, logger);
   
    return app;
  }

}
