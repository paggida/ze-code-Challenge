const dbConfig = require('../../../../src/database/config');
const partnerDBServices = require('../../../../src/database/services/PartnerDBServices');

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

describe('Validation of the flow to add a new partner.', () => {
  beforeAll(async () => {
    await dbConfig.createConnection(dBUriObj);
  });

  afterAll(async () => {
    await dbConfig.endConnection();
  });

  it('Should be able to add a valid new partner.', async () => {
    const newPartnerCode = await partnerDBServices.setNewPartner(testPartner);

    expect(newPartnerCode.isSuccess).toBeTruthy();
    expect(testPartner.id).toBe(newPartnerCode.id);
  });
  it('Should not be able to add a new partner with an existing id.', async () => {
    const newPartnerCode = await partnerDBServices.setNewPartner({...testPartner, document: '1111111111111/1111'});

    expect(newPartnerCode.isSuccess).toBeFalsy();
    expect(newPartnerCode.message.indexOf("duplicate key")).toBeGreaterThanOrEqual(0);
  });
  it('Should not be able to add a new partner with an existing document.', async () => {
    const newPartnerCode = await partnerDBServices.setNewPartner({...testPartner, id: '3b241101-e2bb-4255-8caf-4136c566a963'});

    expect(newPartnerCode.isSuccess).toBeFalsy();
    expect(newPartnerCode.message.indexOf("duplicate key")).toBeGreaterThanOrEqual(0);
  });

  it('Should not be able to add a invalid new partner.', async () => {
    const newPartnerCode = await partnerDBServices.setNewPartner({});

    expect(newPartnerCode.isSuccess).toBeFalsy();
  });
});

describe('Validation of the flow to find a specific partner.', () => {
  beforeAll(async () => {
    await dbConfig.createConnection(dBUriObj);
  });

  afterAll(async () => {
    await dbConfig.endConnection();
  });

  it('Should be able to find an existing partner.', async () => {
    const partner = await partnerDBServices.getPartnerById('3b241101-e2bb-4255-8caf-4136c566a962');

    expect(partner).toBeTruthy();
    expect(partner.id).toBe(testPartner.id);
    expect(partner.ownerName).toBe(testPartner.ownerName);
    expect(partner.document).toBe(testPartner.document);
  });
  it('Should not be able to return an unknown partner id.', async () => {
    const partner = await partnerDBServices.getPartnerById('99999999-9999-9999-9999-999999999999');

    expect(partner).toBeFalsy();
  });
});

describe('Validation of the flow to delete a specific partner.', () => {
  beforeAll(async () => {
    await dbConfig.createConnection(dBUriObj);
  });

  afterAll(async () => {
    await dbConfig.endConnection();
  });

  it('Should be able to delete an existing partner.', async () => {
    const beforeDeletePartner = await partnerDBServices.getPartnerById('3b241101-e2bb-4255-8caf-4136c566a962');
    await partnerDBServices.deletePartnerById('3b241101-e2bb-4255-8caf-4136c566a962');
    const afterDeletePartner = await partnerDBServices.getPartnerById('3b241101-e2bb-4255-8caf-4136c566a962');

    expect(beforeDeletePartner.id).toBe(testPartner.id);
    expect(beforeDeletePartner).toBeTruthy();
    expect(afterDeletePartner).toBeFalsy();
  });
});
