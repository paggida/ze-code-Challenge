const initialDatabasePartners = require('../../../../src/app/external components/initialDatabasePartners');

describe('Validation of the initial database partners object.', () => {
  it('Should be able to obtain at least one initial partner registration.', () => {
    expect(initialDatabasePartners.length).toBeGreaterThan(0);
  });
});
