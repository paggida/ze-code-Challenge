const request = require('supertest');
const app = require('../../../../../src/server');
const dbConfig = require('../../../../../src/database/config');
const partnerService = require('../../../../../src/database/services/PartnerService');

const dBUriObj = dbConfig.getDBUriObj();

const testPartner = {
  id: '3b241101-e2bb-4255-8caf-4136c566a962',
  tradingName: 'Adega de Teste',
  ownerName: 'Zé do teste',
  document: '9999999999999/9999',
  coverageArea: {
    type: 'MultiPolygon',
    coordinates: [
      [[[30, 20], [45, 40], [10, 40], [30, 20]]],
      [[[15, 5], [40, 10], [10, 20], [5, 10], [15, 5]]]
    ]
  },
  address: {
    type: 'Point',
    coordinates: [-46.57421, -21.785741]
  }
}

describe('Validation of the feature show() .', () => {
  beforeAll(async () => {
    await dbConfig.createConnection(dBUriObj);
    await partnerService.setNewPartner(testPartner);
  });

  afterAll(async () => {
    await partnerService.deletePartnerById('3b241101-e2bb-4255-8caf-4136c566a962');
    await dbConfig.endConnection();
  });

  it('Should be able to find a exist partner by id.', async () => {

    const {status, body} = await request(app).get('/api/v1/partner/3b241101-e2bb-4255-8caf-4136c566a962');

    expect(status).toBe(200);
    expect(body).toHaveProperty('id','3b241101-e2bb-4255-8caf-4136c566a962');
    expect(body).toHaveProperty('tradingName','Adega de Teste');
    expect(body).toHaveProperty('ownerName','Zé do teste');
    expect(body).toHaveProperty('document','9999999999999/9999');
    expect(body).toHaveProperty('coverageArea');
    expect(body.coverageArea).toHaveProperty('type','MultiPolygon');
    expect(body.coverageArea).toHaveProperty('coordinates');
    expect(body).toHaveProperty('address');
    expect(body.address).toHaveProperty('type','Point');
    expect(body.address).toHaveProperty('coordinates',[-46.57421, -21.785741]);
    expect(body).toHaveProperty('createdAt');
  });

  it('Should not be able to find an unknown id partner.', async () => {

    const {status, body} = await request(app).get('/api/v1/partner/9a999999-9b99-9c99-9d99-9e99999999f9');

    expect(status).toBe(404);
    expect(body.message).toBe('Partner not found.');
  });
});
