const dbConfig = require('../../../src/database/config');
const partnerDBServices = require('../../../src/database/services/PartnerDBServices');
const initialDatabasePartners = require('../../../src/app/external components/initialDatabasePartners');

describe('Validation of the initial records in the database.', () => {
  beforeAll(async () => {
    const dBUriObj = dbConfig.getDBUriObj();
    await dbConfig.createConnection(dBUriObj);
  });

  afterAll(async () => {
    await dbConfig.endConnection();
  });

  it('Should be able to initialize the database with initial records.', async () => {
    const allPartners = await partnerDBServices.getAllPartners();

    expect(allPartners.length).toBeGreaterThanOrEqual(initialDatabasePartners.length);
  });
});
