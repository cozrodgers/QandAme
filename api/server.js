// require modules
const express = require('express');
const app = express();
const items = require('./items');

//call the instance and use the get function of the instance
app.get('/', function (req, res) {
    //set content type as json
res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(items));
});

//listen on port 8080
app.listen(process.env.PORT || 8085);
