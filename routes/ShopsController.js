const express = require('express')
const router = express.Router()
const { User } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
    const shops = await Shop.find({})
    // it's just going to send json instead of sending a string of handlebars
    
    res.send("Hello")
    // res.json(shops)
    } catch (err) {
        res.send(err)
    }
})  

module.exports = router