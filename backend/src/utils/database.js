const {Pool, Client} = require('pg')
const pool = new Pool({
  user: 'admin',
  host: 'postgres-db',
  database: 'mydb',
  password: 'secret',
  port: 5431,
})

async function dbConnect() {
  await pool.connect();
  console.log("Connected to database, ok");
}

async function doQuery() {
  const res = await pool.query('SELECT NOW()');
  return res.rows[0].message;
}

//await client.end()

module.exports = {
  dbConnect: dbConnect,
  doQuery: doQuery
}
