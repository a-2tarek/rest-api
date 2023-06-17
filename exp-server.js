const mongoose = require('mongoose')
require("dotenv").config()
const express = require('express')
const user = require('./models/User')


const app = express()

mongoose.connect(process.env.MONGO_URL)

app.listen(process.env.PORT , () =>
console.log(`app running om port: ${process.env.PORT}`))

app.get( '/Users',(req, res) =>{
   user.find({}).exec(async function(error, data) {
   try {
    res.json('data')
        console.log(data)
   } catch(error) {
     res.send('error')
   }
   })
})

app.post('/Users', (req,res)=> {

    user.insertOne(req.body, async function (err, data){
        try {
            user.insertOne({data})
        } catch (err) {
            console.log(err)
        }
    } )
})

app.put('/users/:userID', (req,res) => {
    user.findOneAndUpdate({
        id: req.params.userID
    }, (err, data) => {
        if(err){
            res.send('error')
        }else{
            res.status(202)
           
        }
    })
})

app.delete('./Users', (req,res) => {
    user.findOneAndDelete({
        id: req.params.id
    }, (err, data) => {
        if(err){
            res.send('error')
        }else{
            res.status(204)
           
        }
    })
})
