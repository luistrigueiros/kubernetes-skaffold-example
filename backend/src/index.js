const express = require('express')
const { echo } = require('./utils');
const app = express()
const port = 3000

function handleRoot(req, res) {
  res.send(echo('Hello World 3!'));
}

app.get('/', handleRoot)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
