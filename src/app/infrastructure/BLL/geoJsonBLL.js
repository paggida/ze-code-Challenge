const IGeoJsonMethods = require('../../domain/contracts/IGeoJsonMethods');
const GeoJsonDAL = require('../DAL/geoJsonDAL');
const responseObjFunctional = require('../functional/responseObjFunctional');
const geoJsonValidation = require('../validation/geoJsonValidation');

const GeoJsonBLL = Object.assign({}, IGeoJsonMethods);

GeoJsonBLL.nearestPartner = async coordinates =>{
  if(geoJsonValidation.isValidCoordinates(coordinates)){

    const partner = await GeoJsonDAL.nearestPartner(coordinates);

    if(partner){
      return responseObjFunctional.getSuccessResponseObj(partner);
    }else{
      return responseObjFunctional.getFailedResponseObj(404, 'No near partners.');
    }
  }else{
    return responseObjFunctional.getFailedResponseObj(400, 'Incorrect coordinates.');
  }
}

module.exports = GeoJsonBLL;
