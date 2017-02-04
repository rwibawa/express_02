var express = require('express')
var app = express()

var cool = require('cool-ascii-faces');

app.set('port', (process.env.PORT || 5000));
app.set('pgconn', (process.env.DATABASE_URL || 'postgres://calmdbuser:1234@localhost:5432/express_01-dev'));

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

var pg = require('pg');

app.get('/db', function (request, response) {
    pg.connect(app.get('pgconn'), function(err, client, done) {
        client.query('SELECT * FROM test_table', function(err, result) {
            done();
            if (err)
            { console.error(err); response.send("Error " + err); }
            else
            { response.send(result.rows); }
            //{ response.render('pages/db', {results: result.rows} ); }
        });
    });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

