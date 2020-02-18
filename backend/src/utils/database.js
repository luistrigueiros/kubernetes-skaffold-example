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

function doQuery() {
  pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.log(err, res)
    } else {
      console.log("Done query");
    }
    //pool.end()
  });
}

//await client.end()

module.exports = {
  dbConnect: dbConnect,
  doQuery: doQuery
}
