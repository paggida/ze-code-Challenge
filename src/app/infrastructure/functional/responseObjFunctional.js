const ResponseObj = require('../../domain/models/ResponseObj')

module.exports = {
  getSuccessResponseObj(data=''){
    const successResponseObj = Object.assign({}, ResponseObj);

    successResponseObj.code = 200;
    successResponseObj.data = data;

    return successResponseObj
  },
  getFailedResponseObj(errorCode, message='Internal server error'){
    const failedResponseObj = Object.assign({}, ResponseObj);

    failedResponseObj.code = errorCode;
    failedResponseObj.data = { message };

    return failedResponseObj
  }
}
