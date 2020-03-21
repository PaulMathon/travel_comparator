import { expect } from '../utils/TestUtils';
import { SncfApi } from '../../src/api/SncfApi';
import { TravelApi } from '../../src/api/TravelApi';
import { City } from '../../src/entities/specific/City';

describe('SNCF : ', () => {

  const REQUEST_REBOUNCE = 5;
  let api: TravelApi;

  before(() => {
    api = new SncfApi();
  });

  it('Stress tests', async () => {

    const cityFrom: City = {
      name: 'Paris',
      zipCode: 75000,
      uic: 87686030
    };
    const cityTo: City = {
      name: 'Lille',
      zipCode: 59000,
      uic: 87286005
    };
    const currentDate = new Date();
  
    for (let i = 0 ; i < REQUEST_REBOUNCE ; i ++) {
      const journeys = await api.getAvailables(cityFrom, cityTo, currentDate);
      // expect(journeys.legs).to.not.be.undefined;
      // expect(journeys.legs.length > 0).to.be.true;
    }
  });
});
