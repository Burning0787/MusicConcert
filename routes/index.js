const fs=require("fs");
var express = require('express');
const req = require("express/lib/request");
const res = require("express/lib/response");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/events', function(req, res, next) {
  res.render('events');
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.post("/submit", function(req,res){
let name=req.body.name;
let email=req.body.email;
let number=req.body.number;
fs.appendFile("data.txt", `name: ${name}, email: ${email}, number: ${number}\n`,function(e){
  if(e){
    console.log(e);
  }
})
})

module.exports = router;
