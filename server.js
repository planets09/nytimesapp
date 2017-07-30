
//using require to use express engine
var express = require('express');
//start express engine
var app = express();

//serve the files on local server at ROOT directory (you should name the correct directory)
app.use(express.static(__dirname + '/'));
//when this is deployed on Heroku, listen for incoming request on 3000 or current port.
app.listen(process.env.PORT || 3000);