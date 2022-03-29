let mysql = require("mysql");
//------------------------------------------
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "ischooldb",
    password: "123456"
});

connection.connect(function(error) {
    if (error) {
        console.log("Error ", error)
    } else {
        // step1 connect to MySQL
        // console.log("MySQL connected to ischooldb");

        // step2 create a database
        /*   connection.query("CREATE DATABASE ischooldb", function(error, result){
            if(error){ console.log("Error : ", error)}
            else{ console.log("Result ", result)}
        })
        */

        // step3 create a table on database
        let sql = "CREATE TABLE participants (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(300))";

        connection.query(sql, function(error, result) {
            if (error) { console.log("Error : ", error) } else { console.log("Result ", result) }
        })

        // step4 insert values in to table on database

        sql = "INSERT INTO participants (name, email) VALUES ('Vijay', 'vijay.shivu@gmail.com')";

        connection.query(sql, function(error, result) {
            if (error) { console.log("Error : ", error) } else { console.log("Result ", result) }
        })


        // step5 insert multiple values in to table 
        sql = "INSERT INTO participants (name, email) VALUES ('Kit', 'kit@walker.com'), ('Bruce', 'bruce@benner.com'), ('Natasha', 'nash@blackwidow.com')";
        connection.query(sql, function(error, result) {
                if (error) { console.log("Error : ", error) } else { console.log("Result ", result) }
            })
            // step6 insert multiple values in to table 

        let heroes = [
            ["Clark", "clark@kent.com"],
            ["Bruce", "bruce@wayne.com"],
            ["Peter", "peter@parker.com"]
        ];


        sql = "INSERT INTO participants (name, email) VALUES ?";

        connection.query(sql, [heroes], function(error, result) {
            if (error) { console.log("Error : ", error) } else { console.log("Result ", result) }
        })


        sql = "CREATE TABLE staffs (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(300))";

        connection.query(sql, function(error, result) {
            if (error) { console.log("Error : ", error) } else { console.log("Result ", result) }
        })

        // step4 insert values in to table on database

        sql = "INSERT INTO staffs (name, email) VALUES ('Vijay', 'vijay.shivu@gmail.com')";

        connection.query(sql, function(error, result) {
            if (error) { console.log("Error : ", error) } else { console.log("Result ", result) }
        })


        // step5 insert multiple values in to table 
        sql = "INSERT INTO staffs (name, email) VALUES ('Kit', 'kit@walker.com'), ('Bruce', 'bruce@benner.com'), ('Natasha', 'nash@blackwidow.com')";
        connection.query(sql, function(error, result) {
                if (error) { console.log("Error : ", error) } else { console.log("Result ", result) }
            })
            // step6 insert multiple values in to table 

        heroes = [
            ["Clark", "clark@kent.com"],
            ["Bruce", "bruce@wayne.com"],
            ["Peter", "peter@parker.com"]
        ];


        sql = "INSERT INTO staffs (name, email) VALUES ?";

        connection.query(sql, [heroes], function(error, result) {
            if (error) { console.log("Error : ", error) } else { console.log("Result ", result) }
        })

        // step7 query all data in database 
        // let sql = "SELECT * FROM participants";
        // step8 query name of id 1 
        // let sql = "SELECT name from participants WHERE id = 1";

        sql = "SELECT * from participants WHERE id < 5";

        connection.query(sql, function(error, result) {
            if (error) { console.log("Error ", error) } else {
                console.log("Response ", result);
                /* result.forEach(recordSet => {
                    console.log(recordSet.name)
                }); */
            }
        });

        sql = "SELECT * from participants WHERE id > 5";

        connection.query(sql, function(error, result) {
            if (error) { console.log("Error ", error) } else {
                console.log("Response ", result);
                /* result.forEach(recordSet => {
                    console.log(recordSet.name)
                }); */
            }
        });

        sql = "SELECT * from participants WHERE id%2=0";

        connection.query(sql, function(error, result) {
            if (error) { console.log("Error ", error) } else {
                console.log("Response ", result);
                /* result.forEach(recordSet => {
                    console.log(recordSet.name)
                }); */
            }
        });


        sql = "SELECT participants.ID, participants.name as participant, staffs.name as staff FROM participants INNER JOIN staffs ON participants.id=staffs.id;"
        connection.query(sql, function(error, result) {
            if (error) { console.log("Error ", error) } else {
                console.log("Response ", result);
                /* result.forEach(recordSet => {
                    console.log(recordSet.name)
                }); */
            }
        });


        sql = `
        INSERT IGNORE INTO participants select *from staffs;


        `
        connection.query(sql, function(error, result) {
            if (error) { console.log("Error ", error) } else {
                console.log("Response ", result);
                /* result.forEach(recordSet => {
                    console.log(recordSet.name)
                }); */
            }
        });


        sql = `CREATE VIEW partcipantsView AS  SELECT name, email FROM participants where id>2;  `
        connection.query(sql, function(error, result) {
            if (error) { console.log("Error ", error) } else {
                console.log("Response ", result);
                let query = 'select * from participantsView;'
                connection.query(query, function(error, result) {
                    if (error) { console.log("Error ", error) } else {
                        console.log("Response ", result);
                        /* result.forEach(recordSet => {
                            console.log(recordSet.name)
                        }); */
                    }
                });
            }
        });



    }
});




// step x to remove a database
//   connection.query("DROP DATABASE ischooldb", function(error, result){
//        if(error){ console.log("Error : ", error)}
//       else{ console.log("Result ", result)}
//   });

/*
query all records above 5
query all records below 5
query aleternate records
join
merge
views

create a crud application with MySQL express
*/