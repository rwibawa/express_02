var express = require('express')
var app = express()

var cool = require('cool-ascii-faces');

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/cool', function(request, response) {
    response.send(cool());
});

app.get('/times', function (req, res) {
    var result = ''
    var times = process.env.TIMES || 5
    for (i=0; i < times; i++)
        result += i + ' ';
    res.send(result)
})

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

