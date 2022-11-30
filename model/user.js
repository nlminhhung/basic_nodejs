const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    name: String,
    friend_name: String
})

const user = mongoose.model('user', userModel)
module.exports = user