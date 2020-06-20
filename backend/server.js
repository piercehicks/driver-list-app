const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config()

// Express Route
const driverRoute = require('../backend/routes/driverRoute')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/drivers', driverRoute)

mongoose.connect(
    process.env.DATABASE_URL,
    { useUnifiedTopology: true, useNewUrlParser: true }
)

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('server started'))

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
