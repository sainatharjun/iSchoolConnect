const express = require("express");
let app = express();
let jsonData = require('./temp.json')
var fs = require('fs')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
app.use(express.json())

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })   
app.get("/",function(req, res){
//    console.log(jsonData)
res.sendFile(__dirname+"/public/index.html")
})

app.get('/read',function(req,res){
    res.json(jsonData)
})

app.post('/write', function(req,res){
    jsonData.push(req.body)
    console.log(jsonData)
    fs.writeFile('temp.json',JSON.stringify(jsonData),function(err,txt){
        if(err) throw err
        else{
            res.send('Data Added')
        }
    })
})

app.listen(3000);
console.log("server is now running on localhost:3000");