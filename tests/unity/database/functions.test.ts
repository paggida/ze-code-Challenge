const db = require("../../../src/database/functions");

//uuid: 3b241101-e2bb-4255-8caf-4136c566a962

describe('Validation of the flow to add a new partner.', () => {
  it('Should be able to add a valid new partner.', () => {
    /*const response = error.throwException(1);
    expect(response.status).toBe(1);
    expect(response.type).toBe('DB');
    expect(response.message).toBe('Table not found.');*/
  });
  it('Should not be able to add a new partner with an existing id.', () => {
    /*const response = error.throwException('X');
    expect(response.status).toBe('X');
    expect(response.type).toBe('DB');
    expect(response.message).toBe('Unknown error code');*/
  });
  it('Should not be able to add a new partner with an existing document.', () => {
    /*const response = error.throwException('X');
    expect(response.status).toBe('X');
    expect(response.type).toBe('DB');
    expect(response.message).toBe('Unknown error code');*/
  });
});

describe('Validation of the flow to find a specific partner.', () => {
  it('Should be able to find an existing partner.', () => {
    /*const response = error.throwException(1);
    expect(response.status).toBe(1);
    expect(response.type).toBe('DB');
    expect(response.message).toBe('Table not found.');*/
  });
  it('Should not be able to return an unknown partner id.', () => {
    /*const response = error.throwException('X');
    expect(response.status).toBe('X');
    expect(response.type).toBe('DB');
    expect(response.message).toBe('Unknown error code');*/
  });
});

describe('Validation of the flow to delete a specific partner.', () => {
  it('Should be able to delete an existing partner.', () => {
    /*const response = error.throwException(1);
    expect(response.status).toBe(1);
    expect(response.type).toBe('DB');
    expect(response.message).toBe('Table not found.');*/
  });
});
