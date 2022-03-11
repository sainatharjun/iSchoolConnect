let eventEmitter=require('events').EventEmitter;

let myEvent= new eventEmitter()

function handler1(){
  console.log('event1 handled')
}

function handler2(){
  console.log('event2 handled')
}



myEvent.addListener('event1',handler1)
myEvent.addListener('event2',handler2)
console.log(myEvent.eventNames())
myEvent.emit('event1')
myEvent.emit('event2')
