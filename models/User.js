const mongoose = require('mongoose')

userSchema = new mongoose.Schema({
    name: String,
    age: number
})

const users = mongoose.model('users', userSchema)

module.exports = users
