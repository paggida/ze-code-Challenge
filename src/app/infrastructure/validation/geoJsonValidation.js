module.exports = {
  isValidCoordinates(coordinates=[]){
    if(coordinates.length !== 2){
      return false
    }
    return this.isValidLongitude(coordinates[0]) && this.isValidLatitude(coordinates[1])
  },
  isValidLongitude(longitude){
    if(isNumber(longitude)){
      return longitude>=-180 && longitude<=180;
    }
    return false;
  },
  isValidLatitude(latitude){
    if(isNumber(latitude)){
      return latitude>=-90 && latitude<=90;
    }
    return false;
  }
}

const isNumber = n => (/^-?[\d.]+(?:e-?\d+)?$/.test(n));
