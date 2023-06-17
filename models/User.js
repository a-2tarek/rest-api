const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const users = mongoose.model('users', userSchema)

module.exports = users