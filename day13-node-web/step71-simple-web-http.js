let http= require('http');
let message='My first Page'
let server = http.createServer(function(request,response){
response.writeHead(200,'All is good',{'Content-Type':'text/html'})
response.write(`<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Document</title> </head> <body> <h1>${message}</h1> </body> </html>`)
response.end()
})

server.listen(3000,'localhost',function(error){
  if(error){
    console.log(error)
  }
  else{
    console.log('Server Listening at 3000')
  }
})