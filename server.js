require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/idea-board

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}); 


// inject middleware

app.use(express.static(__dirname + '/client/build/'));
app.use(bodyParser.json());
app.get('/', (req,res) => {
  res.send('Hello world!')
})


// Start adding routes

// static files
app.get('/', (req,res) => {
	res.sendFile(__dirname + '/client/build/index.html')
})


// set app to listen on PORT 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})



