const mongoose = require('mongoose');
const schema = mongoose.Schema;
mongoose.connect(process.env.USER_URL, {
useNewUrlParser: true})

const imageSchema = {
   img: {data:Buffer, contentType: String}
}

const imageModel = mongoose.model('image', imageSchema)
module.exports = imageModel
