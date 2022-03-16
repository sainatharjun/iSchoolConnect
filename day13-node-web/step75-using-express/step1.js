const express = require("express");
const app = express();

app.get("/",function(req,res){
    /* 
    res.write("hello there");
    res.end(); 
    */
    // res.send("<h1> hello from express </h1>");
    res.sendFile(__dirname+"/index.html")
})

app.listen(2020,"localhost");
console.log("server is now live");