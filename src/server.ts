import express from 'express';
import {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './app/services/swagger.json';
import dbConfig from './database/config';
import routes from './routes';

class App {
  App: express.Application;

  constructor()
  {
    this.App = express();

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
    this.App.use(express.json());
    this.App.use(cors());
  }
  security()
  {
    this.App.disable('x-powered-by');
    this.App.disable('etag');
  }
  routes()
  {
    this.App.use('/api/v1', routes);
    this.App.use('/api/v1/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
  exception()
  {
    this.App.use(async (err: Error , req:Request, res:Response, next:NextFunction) => {
      if (process.env.NODE_ENV !== 'production') {
        return res.send(err);
      }
      return res.status(500).json({
        message: 'Internal server error, please try again later'
      });
    });
  }
}

export default new App().App;
