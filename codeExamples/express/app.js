var express = require('express');

var app = express();

var port = 5000;
 

app.get('/', function(req, res){
    res.send('Merhaba Dünya');
});


app.listen(port, function(err){
    console.log('running server on port ' + port);
});

