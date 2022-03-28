let mysql = require("mysql");
//------------------------------------------
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456"
});

connection.connect(function(error) {
    if (error) {
        console.log("Error ", error)
    } else {
        console.log("MySQL connected")
    }
    connection.query('Create Database ischooldb', function(err, res) {
        if (err) throw err
        console.log(res)
    })
});