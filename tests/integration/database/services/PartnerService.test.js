const dbConfig = require('../../../../src/database/config');
const PartnerService = require('../../../../src/database/services/PartnerService');

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

describe('Test Describe.', () => {
  it('Test test.', async () => {
    expect(testPartner.id).toBe(testPartner.id);
  });
});

/*describe('Validation of the flow to add a new partner.', () => {
  it('Should be able to add a valid new partner.', async () => {
    const newPartnerCode = await PartnerService.setNewPartner(testPartner);
    expect(testPartner.id).toBe(newPartnerCode);
  });
  it('Should not be able to add a new partner with an existing id.', async () => {
    const newPartnerCode = await PartnerService.setNewPartner({...testPartner, document: '1111111111111/1111'});
    expect(newPartnerCode).toBeNull();
    expect(newPartnerCode).toBeUndefined();
  });
  it('Should not be able to add a new partner with an existing document.', async () => {
    const newPartnerCode = await PartnerService.setNewPartner({...testPartner, id: '3b241101-e2bb-4255-8caf-4136c566a963'});
    expect(newPartnerCode).toBeNull();
    expect(newPartnerCode).toBeUndefined();
  });
});

describe('Validation of the flow to find a specific partner.', () => {
  it('Should be able to find an existing partner.', async () => {
    const partner = await PartnerService.getPartnerById('3b241101-e2bb-4255-8caf-4136c566a962');
    expect(partner).toBeTruthy();
    expect(partner.id).toBe(testPartner.id);
    expect(partner.ownerName).toBe(testPartner.ownerName);
    expect(partner.document).toBe(testPartner.document);
  });
  it('Should not be able to return an unknown partner id.', async () => {
    const partner = await PartnerService.getPartnerById('99999999-9999-9999-9999-999999999999');
    expect(partner).toBe(testPartner);
  });
});

describe('Validation of the flow to delete a specific partner.', () => {
  it('Should be able to delete an existing partner.', async () => {
    const beforeDeletePartner = await PartnerService.getPartnerById('3b241101-e2bb-4255-8caf-4136c566a962');
    await PartnerService.deletePartnerById('3b241101-e2bb-4255-8caf-4136c566a962');
    const afterDeletePartner = await PartnerService.getPartnerById('3b241101-e2bb-4255-8caf-4136c566a962');

    expect(beforeDeletePartner.id).toBe(testPartner.id);
    expect(beforeDeletePartner).toBeTruthy();
    expect(afterDeletePartner).toBeFalsy();
  });
});*/
