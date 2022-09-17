// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(express.static('Calculator'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile("bmiCalculator.html",{root:__dirname});
});

app.post("/index.html",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result = num1+num2;
    res.send("The result of the calculation is:"+result);
});

app.post("/bmiCalculator.html",function(req,res){
    var weight= parseFloat(req.body.weight);
    var height= parseFloat(req.body.height);
    var bmi = weight/(height*height);
    
    res.send("Your bmi is " +bmi);
});

app.listen(5500,function(){
    console.log("server running at port 5500");
});