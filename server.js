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

const indexRouter = require('./routes/index')
const index2Router = require('./routes/index2')
const index3Router = require('./routes/storage')

app.set('view engine', 'ejs')
app.set("views",__dirname + "/views")

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
app.use('/index2', index2Router)
app.use('/storage', index3Router)

app.listen(process.env.PORT || 3000)