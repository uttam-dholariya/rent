import express from 'express';
import process from 'process';
import bodyparser from 'body-parser';
import cors from 'cors';
import logger from './services/logging.js';
import rentalRoute from './modules/rental/rentalRoute.js';
import { rentalBaseURL } from './services/config.js';
import fileUpload from 'express-fileupload';


export class Server {
  app;
  port;

  constructor(port) {
    this.port = port;
    this.app = express();

    this.api();
  }

  async start() {
    try {
      
     
      await this.app.listen(this.port, '0.0.0.0');
      logger.info(`server listening on ${this.port}`);
    } catch (err) {
      logger.info(`server listening on ${this.port}`);
      process.exit(1);
    }
  }


  api() {
    this.app.use(bodyparser.urlencoded({ extended: true }));
    this.app.use(bodyparser.json());
    this.app.use(fileUpload());
    this.app.use(cors());
    this.app.get('/', (req, res) => {
      res.sendStatus(200);
    });
    this.app.use(rentalBaseURL, rentalRoute);
  }
}
