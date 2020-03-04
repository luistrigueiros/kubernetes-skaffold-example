const express = require('express')
const db = require('./database');
const app = express();
const port = 3000;
const serviceName = process.env.SERVICE_NAME || 'default-service-name'


app.get('/', (req, res) => {
  db.doQuery((row) => {
    res.send(`The date is now ${row.now} at ${serviceName}`);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
