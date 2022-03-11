let eventEmitter=require('events').EventEmitter;

let myEvent= new eventEmitter()
var i=1;
function handler1(){
  console.log(i,'event1 handled')
}




myEvent.addListener('event1',handler1)
function repeatedEvent(){
  return setInterval(function(){
  if(i>5){
    console.log('5 times done')
    clearInterval(this)
  }
  else{
      myEvent.emit('event1')

  }
i++;
},2000)
}

repeatedEvent()

