var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Grocery = require('./app/models/grocery');
var app = express();

//Connect to MongoDB//
mongoose.connect('mongodb://localhost/test')

//Get data from form//
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json

//Set our start point here//
app.use(express.static('public'))

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

//Post Grocery//
app.post('/api/grocery', function (req, res) {

    // create a todo, information comes from AJAX request from Angular
    Grocery.create({
        name: req.body.name,
        done: false
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Grocery.find(function (err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
    });

});

//Delete Grocery//
app.delete('api/delete/:id', function(req,res){
    

})

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('fired up server');
})