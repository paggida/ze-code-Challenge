const express = require('express');
const cors = require('cors');
const youch = require('youch');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./app/services/swagger.json');
const dbConfig = require('./database/config');
const routes = require('./routes');

class App {
  constructor()
  {
    this.express = express();

    this.database();
    this.middlewares();
    this.security();
    this.routes();
    this.exception();
  }

  database()
  {
    dbConfig.initializeDatabases(dbConfig.getDBUriObj());
  }
  middlewares()
  {
    this.express.use(express.json());
    this.express.use(cors());
  }
  security()
  {
    this.express.disable('x-powered-by');
    this.express.disable('etag');
  }
  routes()
  {
    this.express.use('/api/v1', routes);
    this.express.use('/api/v1/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
  exception()
  {
    /* In production returns standard error, in other environments
       returns errors treated in JSON format.*/
    this.express.use(async (err , req, res, next) => {
      if (process.env.NODE_ENV !== 'production') {
        const errYouch = new youch(err, req);
        return res.json(await errYouch.toJSON());
      }
      return res.status(500).json({
        message: 'Internal server error, please try again later'
      });
    });
  }
}

module.exports = new App().express;
