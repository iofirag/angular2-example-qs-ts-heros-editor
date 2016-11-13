/************* Moduls **************/
var express = require('express')

var app = express();
app.use(express.static(__dirname));// Serve files from ./www directory


// Configure server host+port
app.set('host', process.env.HOST || 'localhost');
app.set('port', process.env.PORT || 3333);

app.listen(app.get('port'), function(){
  console.log('Express server listening on ' + app.get('host') + ':' + app.get('port'));
});