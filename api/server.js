// require modules
const express = require('express');
const app = express();

//call the instance and use the get function of the instance
app.get('/', function (req, res) {
    //set content type as json
res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ username: "user1", email: "test@test.com" }));
});

//listen on port 8080
app.listen(process.env.PORT || 8081);
