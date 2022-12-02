const express = require('express')
const router = express.Router()
router.get('', (req, res) =>{
    res.render('storage.ejs')
})
module.exports = router