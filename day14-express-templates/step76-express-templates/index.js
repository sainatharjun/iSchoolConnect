const express = require("express");
const app = express();

// express configurations set
// express middlewares use
app.use(express.urlencoded( {extended : true} ));

app.locals.pretty = true;

let heroes = [];

app.get("/",function(req, res){
    res.render("home.jade",{
        companyname : "iSchool Connect",
        registereduser : false,
        heroes : heroes
    });
})
app.post("/",function(req, res){
    // console.log(req.body.nexthero);
    // console.log(heroes);
    heroes.push(req.body.nexthero);
    res.redirect("/");
})

app.listen(4040,"localhost", function(error){
    if(error){ 
        console.log("Error ", error)
    }
    else{
        console.log("server is now live")
    }
});

//  npm i nodemon -g 
// nodemon .
// npm i ejs pug jade
