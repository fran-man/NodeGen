var express = require('express');
var Server = express();

Server.get(/.*/,function(req,res){
	res.send('it works!!');
});

Server.listen('9999');

//This is a change! And another!!