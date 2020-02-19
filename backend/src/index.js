const express = require('express')
const db = require('./database');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  db.doQuery((row) => {
    res.send('The date is now ' + row.now);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
