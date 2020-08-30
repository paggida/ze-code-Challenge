const mongoose = require('mongoose');

module.exports = {
  getDBUriObj(){
    return {
      user: '',
      psw: '',
      host: 'localhost', //'db_mongo_ze'
      port: '27017',
      db: 'ZeDB'
    }
  },
  getUri({ user, psw, host, port, db })
  {
    const login = (user && psw)?`${user}:${psw}@`:'';
    return `mongodb://${login}${host}:${port}/${db}`
  },
  async createConnection(dBUriObj)
  {
    await mongoose.connect(this.getUri(dBUriObj), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
  },
  isConnected()
  {
    return mongoose.connection.readyState = 1 || mongoose.connection.readyState = 2
  },
  endConnection()
  {
    mongoose.connection.close();
  },
  async initializeDatabases(dBUriObj)
  {
    await this.createConnection(dBUriObj);
    //TBD
  }
}
