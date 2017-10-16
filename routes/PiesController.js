const express = require('express')
const router = express.Router()
const { User } = require('../db/schema')

// router.get('/', async (req, res) => {
//     try {
//         const pies = await Pie.find({})
//         res.json(pies)
//     } catch (err) {
//         res.send(err)
//     }
// })

// Get One Shop and the array of pies and the single pie
router.get('/:pieId', (req, res) => {
    shop.findOne({})
    .then((shop) => {
        const pie = shop.pies.id([pieId])
        res.json(pie)
    })
})
.catch((error) => {
    console.log(error)
})

module.exports = router