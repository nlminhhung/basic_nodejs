const express = require('express')
const router = express.Router()
const app = express()
const multer = require('multer')
const upload = multer({dest: './public/uploads/'})
const image = require('../model/image')

router.get('', (req, res) =>{
    res.render('index2.ejs')
})

module.exports = router