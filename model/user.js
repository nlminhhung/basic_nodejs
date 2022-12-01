const mongoose = require('mongoose');
const schema = mongoose.Schema;
mongoose.connect(process.env.USER_URL, {
useNewUrlParser: true})

const userSchema = {
    name: String,
    friend: String
}

const user = mongoose.model('userTest', userSchema)
module.exports = user
