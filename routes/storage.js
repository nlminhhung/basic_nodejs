const express = require('express')
const multer = require('multer')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const bodyParser=require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
const imageModel = require('../model/image')


const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads')
    },
    filename: (req, file, cb)=>{
        cb(null, file.fieldname)
    }
})
const upload = multer({storage:storage})

router.get('/', (req, res) => {
    imageModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('storage', {Items: items});
        }
    });
});

router.post('/upload', upload.single('uploaded_file'), (req, res) => {
    res.send("Thank for using my website!")
    const newImg = new imageModel({
        img:{
            data: fs.readFileSync('./uploads/' + req.file.filename),
            contentType: 'application/pdf' // application/pdf
        }
    })
    imageModel.create(newImg, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("saved!")
        }
    })
})
module.exports = router