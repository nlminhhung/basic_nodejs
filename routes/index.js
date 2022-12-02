const express = require('express')
const router = express.Router()
const user = require('../model/user')


router.get('', (req, res) =>{
    res.render('index.ejs')
})

// router.get('/index2', (req, res) => {
//     console.log('post successful');
//     res.render('index2.ejs')
//     const test = new user({name: yourName , friend: friendName})
//     test.save()
// })

router.post('/index3', (req, res, next) => {
        console.log('post successful');
        var data = req.body
        console.log(req.body)
        const test = new user({
            name: data.yname,
            friend: data.fname
        })
        test.save()
        .then(()=>res.redirect("/index2"))
        .catch(err => res.sendStatus(400).sendStatus("failed"))
    })

module.exports = router

