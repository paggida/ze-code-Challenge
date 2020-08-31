const responseObjFunctional = require('../../../../../src/app/infrastructure/functional/responseObjFunctional');

describe('Validation of the response object.', () => {
  it('Should be able to get a valid success response object by sending data.', () => {
    const response = responseObjFunctional.getSuccessResponseObj(1);

    expect(response).toHaveProperty('code',200);
    expect(response).toHaveProperty('data',1);
  });
  it('Should be able to get a valid success response object without sending data.', () => {
    const response = responseObjFunctional.getSuccessResponseObj();

    expect(response).toHaveProperty('code',200);
    expect(response).toHaveProperty('data','');
  });

  it('Should be able to get a valid failed response object by sending code and data.', () => {
    const response = responseObjFunctional.getFailedResponseObj(404,'Not found');

    expect(response).toHaveProperty('code',404);
    expect(response).toHaveProperty('data');
    expect(response.data).toHaveProperty('message','Not found');
  });
  it('Should be able to get a valid failed response object by sending only code.', () => {
    const response = responseObjFunctional.getFailedResponseObj(500);

    expect(response).toHaveProperty('code',500);
    expect(response).toHaveProperty('data');
    expect(response.data).toHaveProperty('message','Internal server error');
  });
});
