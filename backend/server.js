const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config()



const app = express()
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
  );

  const connection = mongoose.connection;
  connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
  })

// Express Route
const driverRouter = require('./routes/drivers');

app.use('/drivers', driverRouter);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.listen(port, () => {
  console.log('Connected to port ' + port)
})

