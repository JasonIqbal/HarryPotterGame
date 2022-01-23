var express = require('express');

var rApp = express();

rApp.set('port', 10001);

rApp.use(express.static(__dirname + '/site'));

rApp.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - page not found');
});

rApp.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - server error');
});

rApp.listen(rApp.get('port'), function(){
	console.log('express strated -- at localhost:'+ rApp.get('port')
	+'\n press control-c to exit');
});
