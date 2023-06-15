const mongoose = require('mongoose')
require("dotenv").config()
const express = require('express')
const user = require('./models/User')
const users = require('./models/User')

const app = express()

mongoose.connect(process.env.MONGO_URL)

app.listen(process.env.PORT , () =>
console.log(`app running om port: ${process.env.PORT}`))

app.get( '/Users',(req, res) =>{
   user.find({}).exec((err, data) => {
    if(err){
        res.send('error')
    }else{
        res.json('data')
        console.log(data)
    }
   })
})

app.post('/Users', (req,res)=> {
    user.insertOne({
        name: 'omar',
        age: 21
    },(err,data) => {
        if(err){
            res.send('error')
        }else{
            res.status(200)
            
        }
    })
})

app.put('/Users', (req,res) => {
    user.findOneAndUpdate({
        id: req.params.id
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
