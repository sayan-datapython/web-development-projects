//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");



const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
   res.sendFile("index.html",{root:__dirname});
    
});

app.post("/",function(req,res){
    const query =req.body.cityName;
    const apiKey = "05aa45c50d68def4394d0933f0f7a0bd";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+unit+"&appid="+apiKey+""
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const WeatherData = JSON.parse(data);
            const temp = WeatherData.main.temp;
            const Weathdesc = WeatherData.weather[0].description;
            const icon = WeatherData.weather[0].icon;
            const imgURL = "http://openweathermap.org/img/wn/"+ icon +"@2x.png"
            res.write("<h1>There are " + Weathdesc +"</h1>");
            res.write("<h1>The temparature in"+query+" is "+ temp +" degrees Celcieus<h1>");
            res.write("<img src="+ imgURL +">");
            res.send();
        })
    });
});






app.listen(5500,function(){
    console.log("server is running at port 5500")
});