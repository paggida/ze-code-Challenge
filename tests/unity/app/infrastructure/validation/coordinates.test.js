const coordinates = require('../../../../../src/app/infrastructure/validation/coordinates');

describe('Validation of the coordinates points.', () => {
  it('Should be able to to validate a valid longitude.', () => {
    const isValid = coordinates.isValidLongitude(-100.24063);

    expect(isValid).toBeTruthy();
  });
  it('Should not be able to to validate a invalid longitude.', () => {
    const isValid = coordinates.isValidLongitude(180.00001);

    expect(isValid).toBeFalsy();
  });

  it('Should be able to to validate a valid latitude.', () => {
    const isValid = coordinates.isValidLatitude(46.91090);

    expect(isValid).toBeTruthy();
  });
  it('Should not be able to to validate a invalid latitude.', () => {
    const isValid = coordinates.isValidLatitude(-91.00001);

    expect(isValid).toBeFalsy();
  });

  it('Should be able to to validate a valid coordinates point (GeoJSON Point).', () => {
    const isValid = coordinates.isValidCoordinates([-100.24063, 46.91090]);

    expect(isValid).toBeTruthy();
  });
  it('Should not be able to to validate a coordinates point (GeoJSON Point) with invalid longitude.', () => {
    const isValid = coordinates.isValidCoordinates([-180.00001,-3.54856]);

    expect(isValid).toBeFalsy();
  });
  it('Should not be able to to validate a coordinates point (GeoJSON Point) with invalid latitude.', () => {
    const isValid = coordinates.isValidCoordinates([57,92]);

    expect(isValid).toBeFalsy();
  });
});
