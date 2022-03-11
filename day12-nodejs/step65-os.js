let os=require('os')

console.log(os.arch())
console.log(os.cpus().length)
console.log(os.totalmem()/1024,'kb')
console.log(os.freemem()/1024,'kb')
console.log(os.userInfo().username)