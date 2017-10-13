const mongoose = require('mongoose')

// perhaps in the icebox we can have custom pies tied to users 

const pieSchema = mongoose.Schema({
    flavor: String,
    price: Number,
    description: String,
    image: String
})

const pieShopSchema = mongoose.Schema({
    name: String,
    yearEstablished: Number,
    pies: [pieSchema]
})

const userScema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    userName: String,
})

const Pie = mongoose.model('Pie', pieSchema)
const User = mongoose.model('User', userSchema)
const Shop = mongoose.model('Shop', pieShopSchema)

module.exports = {
    Pie, User, Shop
}