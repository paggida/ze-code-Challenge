module.exports = {
  isValidCoordinates(coordinates=[]){
    if(coordinates.length !== 2){
      return false
    }
    return this.isValidLongitude(coordinates[0]) && this.isValidLatitude(coordinates[1])
  },
  isValidLongitude(longitude){
    return longitude>=-180 && longitude<=180;
  },
  isValidLatitude(latitude){
    return latitude>=-90 && latitude<=90;
  }
}
