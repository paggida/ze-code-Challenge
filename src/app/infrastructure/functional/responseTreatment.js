module.exports = {
  getSuccessResponseObj(data=''){
    return { code: 200 , data }
  },
  getFailedResponseObj(errorCode, message='Internal server error'){
    return { code: errorCode , data: { message } }
  }
}
