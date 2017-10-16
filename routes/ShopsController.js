const express = require('express')
const router = express.Router()
const { Shop } = require('../db/schema')

router.get('/', async (req, res) => {
    try {
    const shop = await Shop.find({})
    // it's just going to send json instead of sending a string of handlebars
    
    res.json(shop)
    } catch (err) {
        res.send(err)
    }
})  



module.exports = router