const express = require('express')
const app = express()
const mongoose=require('mongoose')
const { MongoClient } = require('mongodb');
const url = "mongodb+srv://sainatharjun:saisai71@cluster0.zroar.mongodb.net/iSchoolConnect?retryWrites=true&w=majority";

app.use(express.static(__dirname+"/public"));
app.use(express.json())

let errorHandler=function(error){console.log(error)}

let Schema=mongoose.Schema;
let ObjectId=Schema.ObjectId;
let user=mongoose.model('User', new Schema({
  id:ObjectId,
  username:String,
  email:String,
  city:String
}))



mongoose.connect(url).then(console.log('DB Connected')).catch(error=>errorHandler(error))

app.delete('/delete/:id',function(req,res){
  user.findByIdAndDelete({_id:req.params.id},function(err,deletedUser){
    if(err){
      console.log(err)
    }
    else{
      console.log('User Deleted')
    }
  })
})

app.get('/data',function(req,res){
  console.log('Get Request Recieved')
  user.find(function(error,users){
    if(error){
      errorHandler(error)
    }
    else{
      res.json(users)
    }
  })
})


app.get('/show-edit/:id',function(req,res){
  console.log('Edit Request Recieved')
  user.findById(req.params.id,function(error,users){
    if(error){
      errorHandler(error)
    }
    else{
      res.json(users)
    }
  })
})




app.post('/edit/:id', function(req,res){
  console.log(req.body)
  user.findByIdAndUpdate(req.params.id,req.body,function(error,docs){
    if(error){
      console.log(error)
      res.json(error)
    }
    else{
      console.log(docs)
      res.json('Updated')
    }
  })
  
})



app.post('/add', function(req,res){
  console.log('Post Request Received');
  let User = new user(req.body);
  console.log(req.body)
  User.save()
  .then((dbres)=>{
    console.log(dbres)
    res.json('Data Inserted')
})
.catch((err)=>{
  console.log(err)
  res.json(err);
})
})



app.listen(3000,function(error){
  if(error){
    console.log(error)
  }
  else{
    console.log('Listening at 3000')
  }
})