
var express = require('express')
var app = express()

app.use(express.static('www'));

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/www/login.html');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/www/index.html');
})

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Express app listening at http://%s:%s', host, port)

})