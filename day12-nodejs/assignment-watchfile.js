var fs = require("fs");

fs.readFile("temp.txt","utf-8",function(err, data){
    if(err){ console.log("Error ", err)}
    else{ console.log(data)};
});


/*
append a quote to a text file and watch for the change every 5 seconds 
*/

  fs.watchFile("temp.txt",{ interval: 5000 },function(){
    console.log("file changed. Quote added.");
});




setTimeout(function(){
  setInterval(() => {
        fs.appendFileSync("temp.txt",'\n"',"utf-8");

  }, 5000);
},2000);