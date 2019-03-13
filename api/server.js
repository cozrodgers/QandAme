// require modules
const express = require('express');


const app = express();

//require cors
var cors = require('cors');
app.use(cors());

const items = require('./items');



//call the instance and use the get function of the instance
app.get('/', function (req, res) {

//set content type as json
res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(items));
});



//start endpoints here 

app.post('/items', create); //create a new item in /items


app.get('/items', findAll); //retrieve all items from items


app.get('/items/:itemId', findOne); //retrieve a single item based on its id


app.put('/items/:itemId', update); //change an item contents based on it sid


app.delete('/items/:itemId', deleteItem); //delete an item based on its id

// call functions here and add the logic


function create(req, res){

};


function findAll(req, res){

};


function findOne(req, res){

};


function update(req, res){

};


function deleteItem(req, res){

};



//listen on port 8080
app.listen(process.env.PORT || 8085);
