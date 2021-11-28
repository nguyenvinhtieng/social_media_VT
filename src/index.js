const express = require('express');
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const { PORT } = require('./credentials')
const port = PORT || 8080
const route = require('./route')
const db = require('./config/db')
db.connect()
route(app)
app.listen(port, () => console.log(`App listening at ${port}`))