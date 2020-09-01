const request = require('supertest');
const app = require('../../../../../src/server');
const dbConfig = require('../../../../../src/database/config');
const partnerDBServices = require('../../../../../src/database/services/PartnerDBServices');

const dBUriObj = dbConfig.getDBUriObj();

const testPartner = {
  id: '3b241101-e2bb-4255-8caf-4136c566a962',
  tradingName: 'Adega de Teste',
  ownerName: 'Zé do teste',
  document: '9999999999999/9999',
  coverageArea: {
    type: 'MultiPolygon',
    coordinates: [[[[-46.623238,-21.785538],[-46.607616,-21.819803],
      [-46.56676,-21.864737],[-46.555088,-21.859322],[-46.552685,-21.848167],
      [-46.546677,-21.836536],[-46.51801,-21.832712],[-46.511143,-21.821877],
      [-46.489857,-21.81805],[-46.480587,-21.810083],[-46.503418,-21.797491],
      [-46.510284,-21.793667],[-46.518696,-21.794304],[-46.52831,-21.785538],
      [-46.56882,-21.767365],[-46.600235,-21.77119],[-46.619118,-21.768799],
      [-46.627872,-21.7739],[-46.628044,-21.782349],[-46.623238,-21.785538]]]]
  },
  address: {
    type: 'Point',
    coordinates: [-46.57422, -21.785742]
  }
}

describe('Validation of search for the nearest partner.', () => {
  beforeAll(async () => {
    await dbConfig.createConnection(dBUriObj);
    await partnerDBServices.setNewPartner(testPartner);
  });

  afterAll(async () => {
    await partnerDBServices.deletePartnerById('3b241101-e2bb-4255-8caf-4136c566a962');
    await dbConfig.endConnection();
  });

  it('Should be able to find the nearest existing partner.', async () => {
    const {address:{ coordinates }} = testPartner;
    const {status, body} = await request(app).get(`/api/v1/partner/nearest/${coordinates[0]}/${coordinates[1]}`);

    expect(status).toBe(200);
    expect(body).toHaveProperty('id','3b241101-e2bb-4255-8caf-4136c566a962');
    expect(body).toHaveProperty('tradingName','Adega de Teste');
    expect(body).toHaveProperty('ownerName','Zé do teste');
    expect(body).toHaveProperty('document','9999999999999/9999');
    expect(body.address).toHaveProperty('coordinates',[-46.57422, -21.785742]);
    expect(body).toHaveProperty('createdAt');
  });

  it('Should not be able to receive data if there are no near partners.', async () => {
    const {status, body} = await request(app).get('/api/v1/partner/nearest/0/90');

    expect(status).toBe(404);
    expect(body.message).toBe('No near partners.');
  });

  it('Should not be able to find a partner based in an incorrect coordinates.', async () => {
    const {status, body} = await request(app).get('/api/v1/partner/nearest/error/90');

    expect(status).toBe(400);
    expect(body.message).toBe('Incorrect coordinates.');
  });
  it('Should not be able to find a partner based in an out of range coordinates.', async () => {
    const {status, body} = await request(app).get('/api/v1/partner/nearest/180.000001/90');

    expect(status).toBe(400);
    expect(body.message).toBe('Incorrect coordinates.');
  });
});
