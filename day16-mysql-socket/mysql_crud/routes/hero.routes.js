const express = require("express");
const mysql = require("mysql");
const errorHandler = require("../helpers/errorhandler");
const config = require('../config.json');

let routes = express.Router();

let connection = mysql.createConnection({
    host: config.host,
    database : config.database,
    user : config.user,
    password : config.password
});

routes.get('/data',function(req, res){
    console.log("Get request for data recieved");

    let query1 = 'Select * from heroes;';
    connection.query(query1,function(error,result){
        if(error){
            errorHandler(error);
        }else{
            res.json({result});
        }
    });
});

routes.delete('/delete/:id',function(req,res){
    let query2 = `DELETE FROM heroes WHERE id = ${req.params.id};`;
    connection.query(query2,function(error,result){
        if(error){
            errorHandler(error);
        }else{
            console.log("Data deleted");
        }
    });
});


routes.get('/edit/:id',function(req,res){
    let query2 = `DELETE FROM heroes WHERE id = ${req.params.id};`;
    connection.query(query2,function(error,result){
        if(error){
            errorHandler(error);
        }else{
            res.json(result[0]);
        }
    });
});



routes.post('/edit/:id', function(req, res){
    heroname = req.body.heroname;
    heroemail = req.body.heroemail;
    herocity = req.body.herocity;
    let query3 = `UPDATE heroes SET heroname='${heroname}', herocity='${herocity}', heroemail='${heroemail}' WHERE id = ${req.params.id}`

    connection.query(query3, (error, result) => {
        if (err) {
            errorHandler(error);
        } else {
            console.log('Data Updated.');
        }
    });
});


routes.post('/add', function(req, res){
    let heroname = req.body.heroname;
    let herocity = req.body.herocity;
    let heroemail = req.body.heroemail;

    let query4 = `INSERT INTO heroes (heroname, herocity, heroemail) VALUES ('${heroname}', '${herocity}', '${heroemail}')`
    connection.query(query4, function(error,result){
        if (error) {
            errorHandler(error);
        } else {
            console.log('Data Added');
        }
    });
});

module.exports = routes;