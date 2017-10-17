const express = require('express')
const router = express.Router({mergeParams: true})
const { Shop, Pies, Review  } = require('../db/schema')


///api/shops/pies/:pieId/reviews 

router.get('/', async (req, res) => {
    const shop = await Shop.findOne({})
    const pie = shop.pies.id(req.params.pieId)
    const reviews = pie.reviews
    res.json(reviews)
})

router.post('/', async (req, res) => {
    // create an empty review model
    // the default values will be in there for title and description
try {
    const newReview = new Review()
    // Find the pie coming from the route
    const shop = await Shop.findOne({})
    const pie = shop.pies.id(req.params.pieId)
    // Push the new review into the pie's list of reviews
    pie.reviews.push(newReview)
    // save the updated pie to the datebase
    const saved = await shop.save()
    // send the pie object back to react
    res.json(pie)
}
catch (err) {
    res.send(err)
}
})
// create input and handle change in the state -- handle change state function
// handleSubmit is the onBlur

router.patch('/:id', async (req, res) => {
    try {
        // get the value of the updated review
    const updatedReview = req.body.review
        // Find the shop
    const shop = await Shop.findOne({})
    // Find the pie
    const pie =  shop.pies.findById(req.params.pieId)
    // Grab the specific review
    const review = pie.reviews.id(req.params.id)

    // Update the title and description
    review.title = updatedReview.title
    review.description = updatedReview.description

    // Save the shop object
    const saved = await shop.save()

    res.json(pie)
    } 
    catch (err) {
        res.send(err)
    }
})

// DELETE a review by id

router.delete('/:id', async (req, res) => {
    try{
    const shop = await Shop.findOne({})
    const pie = shop.pies.id(req.params.pieId)
    console.log(req.params.pieId)
    pie.reviews.id(req.params.id).remove()
    console.log(req.params.id)
    const saved = await shop.save()

    res.json(pie)
    }
    catch (err) {
        res.send(err)
    }
})

module.exports = router