const geoJsonValidation = require('../../../../../src/app/infrastructure/validation/geoJsonValidation');

describe('Validation of the coordinates points.', () => {
  it('Should be able to to validate a valid longitude.', () => {
    const isValid = geoJsonValidation.isValidLongitude(-100.24063);

    expect(isValid).toBeTruthy();
  });
  it('Should not be able to to validate a invalid longitude.', () => {
    const isValid = geoJsonValidation.isValidLongitude(180.00001);

    expect(isValid).toBeFalsy();
  });

  it('Should be able to to validate a valid latitude.', () => {
    const isValid = geoJsonValidation.isValidLatitude(46.91090);

    expect(isValid).toBeTruthy();
  });
  it('Should not be able to to validate a invalid latitude.', () => {
    const isValid = geoJsonValidation.isValidLatitude(-91.00001);

    expect(isValid).toBeFalsy();
  });

  it('Should be able to to validate a valid coordinates point (GeoJSON Point).', () => {
    const isValid = geoJsonValidation.isValidCoordinates([-100.24063, 46.91090]);

    expect(isValid).toBeTruthy();
  });
  it('Should not be able to to validate a coordinates point (GeoJSON Point) with invalid longitude.', () => {
    const isValid = geoJsonValidation.isValidCoordinates([-180.00001,-3.54856]);

    expect(isValid).toBeFalsy();
  });
  it('Should not be able to to validate a coordinates point (GeoJSON Point) with invalid latitude.', () => {
    const isValid = geoJsonValidation.isValidCoordinates([57,92]);

    expect(isValid).toBeFalsy();
  });
});
