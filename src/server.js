import express from 'express';
import cors from 'cors';
import youch from 'youch';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './app/services/swagger.json';
import dbConfig from './database/config';
import routes from './routes';

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
    dbConfig.initializeDatabases();
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

export default new App().express;
