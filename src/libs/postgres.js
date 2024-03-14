import pkg from 'pg';

const { Client } = pkg;

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'liwgar',
    password: 'admin123',
    database: 'todoappdb'
  });
  await client.connect();
  return client;
}

export { getConnection };