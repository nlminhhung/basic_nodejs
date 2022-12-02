const mongoose = require('mongoose');
const schema = mongoose.Schema;
mongoose.connect(process.env.USER_URL, {
useNewUrlParser: true})

const imageSchema = {
   image: {data:Buffer, contentType: String}
   
}

const image = mongoose.model('image', imageSchema)
module.exports = image
