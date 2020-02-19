const dotenv = require('dotenv');
const {Pool} = require('pg');

let pool = null;

function initPool() {
  if (pool != null) {
    return;
  }
  dotenv.config();

  pool = new Pool({connectionString: process.env.DATABASE_URL})

  pool.on('connect', () => {
    console.log('connected to the db');
  });

  pool.on('error', (err, client) => {
// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
  });
}

function doQuery(callback) {
  initPool();
  pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      throw err;
    }
    callback(res.rows[0]);
  });
}

module.exports = {
  doQuery: doQuery
}
