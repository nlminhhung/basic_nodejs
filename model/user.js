const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = {
    name: String
}

const user = mongoose.model('user', userSchema)
const test = new user({name: "hung"})
test.save()