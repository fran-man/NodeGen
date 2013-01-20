var express = require('express');
var Server = express();

Server.get(/\/generate/,function(req,res){
	var responseContents = '';
	
	/* Pull parameters out of URL */
	var dataType = req.query['format'];
	dataType = dataType.toUpperCase();
	
	/* Currently only works for JSON,
	 * Check now... */
	if(dataType != 'JSON'){
		responseContents = "Invalid format, please visit <not yet defined> for usage";
		res.header('Content-Type','text/plain');
		res.send(responseContents);
	}
	else{
		res.header('Content-Type','text/plain');
		res.send('Format:' + dataType);
	}
});

Server.listen('9999');

//This is a change! And another!!