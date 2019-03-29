// require modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//require cors
var cors = require('cors');
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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


//make new obj to pass to the items.js
const item = {
   	id: items.length + 1,
    type: req.body.type,
    user: req.body.user,
    text: req.body.text,
    img: req.body.img
 }


 items.push(item);
 return res.status(201).send({
   success: 'true',
   message: 'item added successfully'
 })

};


function findAll(req, res){

	return res.status(200).send({
        success: 'true',
        message: 'items retrieved successfully',
        items,
      });

};


function findOne(req, res){
	const id = parseInt(req.params.itemId, 10);
	console.log(id);
  	items.map(function(item){
    if (item.id === id){
      return res.status(200).send({
        success: 'true',
        message: 'item retrieved successfully',
        item,
      });
    } 
	});
 	return res.status(404).send({
   		success: 'false',
   		message: 'item does not exist',
  	});

}


  


function update(req, res){

};


function deleteItem(req, res){

};



//listen on port 8080
app.listen(process.env.PORT || 8085);
