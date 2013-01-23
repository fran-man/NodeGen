var express = require('express');
var Server = express();

Server.get(/\/generate/,function(req,res){
	var responseContents = '';
	
	/* Pull parameters out of URL */
	var dataType = req.query['format'];
	var numberOfVals = 5;
	if(isNaN(parseInt(req.query['length']))){
		/* Do nothing */
	}
	else{
		numberOfVals = parseInt(req.query['length']);
	}
	
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
		result = "{"; /* Start of JSON */
		
		for(i = 0; i < numberOfVals; i++){
			result += '"value'+i+'":"'+randStr(8)+'",';
		}
		
		/* Trim last comma... */
		result = result.substring(0,result.length - 1) + "}";
		
		res.send(result);
	}
});

function randStr(length){
	if(!isNaN(length)){
		var chars = "abcdef1234567890";
		var rtn = "";
		for(var i = 0; i < length; i++){
			nextChar = chars.charAt(Math.floor(Math.random()*16));
			rtn += nextChar;
		}
		
		return rtn;
	}
}

Server.listen('9999');

//This is a change! And another!!