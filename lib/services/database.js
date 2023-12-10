

import OracleDB from 'oracledb';
import {
  DB_USERNAME,
  DB_PASSWORD,
  DB_CONNECTSTRING,
  DB_NAME,
  DB_PORT,
} from '../services/config.js';
import logger from '../services/logging.js';

export async function createConnection() {
  const connection = await OracleDB.getConnection({
    user: 'rent',
    password: 'Hello_123',
    connectString: 'localhost/orcl',
  });
  return connection;
}

// const sequelize = new Sequelize("ORCL_RENT","rent","Hello_123",{host:'localhost',dialect:'oracle'});

try {
  await createConnection();
  logger.info(`Connection has been established successfully.`);
} catch (error) {
  console.log(error)
  logger.error(`Unable to connect to the database: ${error}`);
}

