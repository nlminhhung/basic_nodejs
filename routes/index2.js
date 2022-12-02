const express = require('express')
const router = express.Router()
const app = express()
const multer = require('multer')
const upload = multer({dest: './public/uploads/'})

router.get('', (req, res) =>{
    res.render('index2.ejs')
})

// add new
// app.post('/upload', upload.single('uploaded_file'), function (req, res) {
//     console.log("upload success")
//  });

router.post('/upload', upload.single('uploaded_file'), (req, res) => {
    res.send("Hello world")
    console.log('a')
})


module.exports = router