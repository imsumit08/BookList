//improting express
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

//import routes
let apiRoutes = require('./routes');

//initilizing express server
const app = express();

//define server port
const port = 3000;

//intilize body parser to handel port request

//bodyparser.urlencoded looks at where url encoded header is present and {extended: true} make sure that data can be of any type instead of just string.
app.use(bodyParser.urlencoded({extended: true}));
//bodyparse.json does the same where content-type : application/Json in header and covert json to js-accessible variable under req.body
app.use(bodyParser.json());

//connet mongodb and set connection variable
mongoose.connect("mongodb://localhost:27017/BookList", {useNewUrlParser: true, useUnifiedTopology: true});

//sending message for deafult route
app.get('/', function(req, res){
    res.send("App is running successfully");
});

//create routes to get api
app.use('/api', apiRoutes);


//listening on port
//always keep port listening on buttom of file
app.listen(port, function(){
    console.log(`app is running on port ${port}`);
})

