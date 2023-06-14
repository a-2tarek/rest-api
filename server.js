const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()

const app = express()
mongoose.connect(process.env.MONGO_URL)

app.listen(process.env.PORT , () =>
console.log(`app running om port: ${process.env.PORT}`) )