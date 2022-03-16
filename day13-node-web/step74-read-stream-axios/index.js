const axios = require('axios');
const zlib = require('zlib');
const fs=require('fs')

axios({
    method:'get',
    url:'https://rollic.in',
    responseType:'stream'
}).then((res)=>{
    res.data.pipe(zlib.createGzip()).pipe(fs.createWriteStream('tempfiles/rollic.html.zip'))
}).catch((err)=>{
  console.log(err)
})