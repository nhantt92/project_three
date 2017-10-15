require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const UsersController = require('./routes/UsersController')
// Create a new app using express
const app = express();
// Overwrite built in Promise library in mongoose
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/idea-board

// Connecting to Mongoose
const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}); 


// Inject Middleware
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/client/build`))



// Adding Controllers after MiddleWare
app.use('/api/users', UsersController)

// Index route that renders built React App
app.get('/', (req,res) => {
	res.sendFile(__dirname + '/client/build/index.html')
})


// set app to listen on PORT 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})



