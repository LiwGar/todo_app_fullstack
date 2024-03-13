import { Pool } from 'pg';
import { config } from './../config/config';

const pool = new Pool({
  user: config.dbUser,
  host: config.dbHost,
  database: config.dbName,
  password: config.dbPassword,
  port: config.dbPort,
  max: 20, 
  idleTimeoutMillis: 1200000, 
  connectionTimeoutMillis: 5000,
});

pool.on('error', (error, client) => {
  console.error('Unexpected connection pool error', error);
  process.exit(-1);
});

export { pool };