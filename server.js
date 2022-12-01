// if (process.env.NODE_ENV !== 'production')
// {
//     require('dotenv').config();
// }
require('dotenv').config();
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const multer = require('multer')

const indexRouter = require('./routes/index')
// const index2Router = require('./routes/index2')

app.set('view engine', 'ejs')
app.set("views", "./views")

app.use(express.static('public'))
app.use(express.static(__dirname + 'public'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

mongoose.connect(process.env.USER_URL, {
useNewUrlParser: true})
const db = mongoose.connection

db.once('open', () => console.log('Connect to Mongoose'))
db.on('error', error => console.error(error) )
app.use('/', indexRouter) 
// app.use('/index2', index2Router)

// const user = require('./model/user')
// app.get('', (req, res) => {
//     console.log('post successful');
//     const test = new user({name: "hung", friend: "abc"})
//     test.save()
// })


app.listen(process.env.PORT || 3000)