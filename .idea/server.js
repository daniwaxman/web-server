var express = required('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello Express!');
})

app.listen(3000);


