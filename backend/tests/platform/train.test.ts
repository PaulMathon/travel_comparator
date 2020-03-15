import { ServerUtils } from '../utils/ServerUtils';
import { expect, request } from '../utils/TestUtils';
import '../utils/TestUtils';

describe('', () => {

  const backendUrl = ServerUtils.backendUrl;

  before(() => {
    ServerUtils.startTestServer();
  });

  after(() => {
    ServerUtils.stopTestServer();
  })

  it('GET /train 200', async () => {
    const trainJourneys = await request(backendUrl)
      .get('/train?cityFrom=Paris_09&cityTo=Lille&dateFrom=1583702159817');
    console.log(trainJourneys.body);
    expect(trainJourneys).to.have.status(200);
  });
});
