const mongoose = require('mongoose');
const initialDatabasePartners = require('../app/external components/initialDatabasePartners');
const partnerDBServices = require('./services/PartnerDBServices');

module.exports = {
  getDBUriObj(){
    return {
      user: '',
      psw: '',
      host: 'db_mongo_ze',
      port: '27017',
      db: 'ZeDB'
    }
  },
  getUri({ user, psw, host, port, db })
  {
    const login = (user && psw)?`${user}:${psw}@`:'';
    return `mongodb://${login}${host}:${port}/${db}`
  },
  isConnected()
  {
    return mongoose.connection.readyState === 1 || mongoose.connection.readyState === 2
  },
  async createConnection(dBUriObj)
  {
    await mongoose.connect(this.getUri(dBUriObj), {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
  },
  async endConnection()
  {
    await mongoose.connection.close();
  },
  async initializeDatabases(dBUriObj)
  {
    await this.createConnection(dBUriObj);

    const partnersDBSize = await partnerDBServices.getAllPartners();

    if(partnersDBSize.length===0){
      populateDatabases();
    }
  }
};

function populateDatabases(){
  for(partner of initialDatabasePartners){
    partnerDBServices.setNewPartner(partner);
  }
}
