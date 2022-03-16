const fetch = require('fetch');
const fs=require('fs')

fetch.fetchUrl('https://arcstellar.com',function(error,meta,data){
  if (error){
    console.log(error)
  }
  else{
    fs.writeFileSync('tempfiles/arcstellar.html',data,'utf-8')
  }
})