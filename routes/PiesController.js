const express = require('express')
const { Shop, Pies } = require('../db/schema')
const router = express.Router({ mergeParams: true})

// this is api/shops/pies

router.get('/', async (req, res) => {
    try {
        //  find One 
        const shop = await Shop.findOne({})
        const pies = shop.pies
        res.json(pies)
    } catch (err) {
        res.send(err)
    }
})

//Get One Shop and the array of pies and the single pie
router.get('/:pieId', async (req, res) => {
    // grabbing the shop by id
    const shop =  await Shop.findOne({})
    const pie = shop.pies.id(req.params.pieId)
    res.json(pie)
})

module.exports = router