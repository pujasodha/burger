var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");


//get all burgers into the database
router.get('/', function(req, res){
    burger.selectAll(function(data){
        var hbsOject ={
            burgers: data 
        }
        console.log(hbsOject)
        //render them on the page
        res.render('index', hbsOject)
    })
})


//post new burger into database 
router.post('/', function(req, res){
    burger.insertOne([
        'burger_name', 'devoured'
    ],
    [
        req.body.burger_name, req.body.devoured
    ],
    function(){
        res.redirect('/')
    })
})

//update burger as devoured
router.put('/:id', function(req, res){
    var condtion = 'id = ' + req.params.id

    console.log('condition', condition)

    burger.updateOne({
        devoured: req.body.devoured

    }, condition, function() {
        res.redirect('/')
    })
})


module.exports = router







module.exports = router;