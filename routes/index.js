const express = require('express')
const router = express.Router()
const user = require('../model/user')

router.get('', (req, res) =>{
    res.render('index.ejs')
})

// new add
// router.get('/index2', (req, res) =>{
//     res.render('index2.ejs')
// })

router.get('/index2', (req, res) => {
    console.log('post successful');
    res.render('index2.ejs')
    const test = new user({name: "hung", friend: "abc"})
    test.save()
})
module.exports = router

