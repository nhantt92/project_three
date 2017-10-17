const mongoose = require('mongoose')


// perhaps in the icebox we can have custom pies tied to users 
// I could refactor so that the users can have an empty pies array nested in
// 

const reviewSchema = mongoose.Schema({
    title: String,
    description: String
})

const pieSchema = mongoose.Schema({
    flavor: String,
    price:{
        type: Number,
        default: 0
    }, 
    description: {
       type:  String,
       default: "New Pie Description"
    },
    image: {
        type: String,
        default: "Pie Image"
    },
    reviews: [reviewSchema]
})

const shopSchema = mongoose.Schema({
    name: String,
    yearEstablished: Number,
    pies: [pieSchema]
})

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    userName: String
    
})

const Shop = mongoose.model('Shop', shopSchema)
const Pies = mongoose.model('Pie', pieSchema)
const User = mongoose.model('User', userSchema)
const Review = mongoose.model('Review', reviewSchema)


module.exports = {
Shop, Pies, User, Review
   
}