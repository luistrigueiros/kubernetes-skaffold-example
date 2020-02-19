const {Pool} = require('pg')
const pool = new Pool({
  user: 'admin',
  host: 'postgres-db',
  database: 'mydb',
  password: 'secret',
  port: 5431,
})

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});


function doQuery(callback) {
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
