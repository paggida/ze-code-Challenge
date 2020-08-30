const responseTreatment = require('../../../../../src/app/infrastructure/functional/responseTreatment');

describe('Validation of the response object.', () => {
  it('Should be able to get a valid success response object by sending data.', () => {
    const response = responseTreatment.getSuccessResponseObj(1);

    expect(response).toHaveProperty('code',200);
    expect(response).toHaveProperty('data',1);
  });
  it('Should be able to get a valid success response object without sending data.', () => {
    const response = responseTreatment.getSuccessResponseObj();

    expect(response).toHaveProperty('code',200);
    expect(response).toHaveProperty('data','');
  });

  it('Should be able to get a valid failed response object by sending code and data.', () => {
    const response = responseTreatment.getFailedResponseObj(404,'Not found');

    expect(response).toHaveProperty('code',404);
    expect(response).toHaveProperty('data');
    expect(response.data).toHaveProperty('message','Not found');
  });
  it('Should be able to get a valid failed response object by sending only code.', () => {
    const response = responseTreatment.getFailedResponseObj(500);

    expect(response).toHaveProperty('code',500);
    expect(response).toHaveProperty('data');
    expect(response.data).toHaveProperty('message','Internal server error');
  });
});
