const dbConfig = require('../../../../src/database/config');

describe('Validation of the connection string object.', () => {
  it('Should be able to get a valid connection string object.', async () => {
    const dBUriObj = dbConfig.getDBUriObj();

    expect(dBUriObj).toHaveProperty('user');
    expect(dBUriObj).toHaveProperty('psw');
    expect(dBUriObj).toHaveProperty('host');
    expect(dBUriObj).toHaveProperty('port');
    expect(dBUriObj).toHaveProperty('db');
    expect(dBUriObj.host).toBeTruthy();
    expect(dBUriObj.port).toBeTruthy();
    expect(dBUriObj.db).toBeTruthy();
  });
});

describe('Validation of the connection string (Uri).', () => {
  it('Should be able to create a complete connection string (Uri).', async () => {
    const dBUriObj = {
      user: 'zeUser',
      psw: 'zePsw',
      host: 'localhost',
      port: '27017',
      db: 'ZeDB'
    };
    const uriString = await PartnerService.getUri(dBUriObj);
    expect(uriString).toBe('mongodb://zeUser:zePsw@localhost:27017/ZeDB');
  });
  it('Should not be able to add a user without a password in a connection string (Uri).', async () => {
    const dBUriObj = {
      user: 'zeUser',
      psw: '',
      host: 'localhost',
      port: '27017',
      db: 'ZeDB'
    };
    const uriString = await PartnerService.getUri(dBUriObj);
    expect(uriString).not.stringContaining('zeUser')
  });
  it('Should not be able to add a password without a user in a connection string (Uri).', async () => {
    const dBUriObj = {
      user: '',
      psw: 'zePsw',
      host: 'localhost',
      port: '27017',
      db: 'ZeDB'
    };
    const uriString = await PartnerService.getUri(dBUriObj);
    expect(uriString).not.stringContaining('zePsw')
  });
});

describe('Validation of the connection with database.', () => {
  it('Should be able to verify a connection status.', async () => {
    expect(dbConfig.isConnected()).toBeFalsy();
  });
  it('Should be able to create a connection with database.', async () => {
    const dBUriObj = dbConfig.getDBUriObj();
    dbConfig.createConnection(dBUriObj);

    expect(dbConfig.isConnected()).toBeTruthy();
  });
  it('Should be able to close a connection with database.', async () => {
    dbConfig.endConnection();

    expect(dbConfig.isConnected()).toBeFalsy();
  });
});

describe('Validation of the records in the database.', () => {
  it('Should be able to verify a connection status.', async () => {
    expect(dbConfig.isConnected()).toBeFalsy();
  });
});
