const express = require('express')
const {echo} = require('./utils/util');
const {dbConnect, doQuery} = require('./utils/database');
const app = express();
const port = 3000;

async function handleRoot(req, res) {
  await dbConnect();
  const date = doQuery();
  res.send(echo('The date is now ' + date));
}

app.get('/', handleRoot);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
