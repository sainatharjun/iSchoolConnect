const axios = require('axios');
const fs=require('fs')

axios('https://arcstellar.com').then((res)=>{

    fs.writeFileSync('tempfiles/arcstellar.html',res.data,'utf-8')

}).catch((err)=>{
  console.log(err)
})