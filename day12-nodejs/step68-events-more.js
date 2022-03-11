let EventEmitter = require("events").EventEmitter;

let myevent = new EventEmitter();

myevent.on("ischoolEvent", function(){
    console.log("iSchool Event Happened");
});

setTimeout(function(){
    myevent.emit("ischoolEvent");
},2000);

