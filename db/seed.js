require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const { User, Pie, Shop } = require('./schema')



// PIES

const apple = new Pie({
    flavor: "apple",
    price: 10,
    description: "The all-American favorite! An apple pie, regional variation apple tart, is a fruit pie, in which the principal filling ingredient is apple. It is, on occasion, served with whipped cream or ice cream on top, or alongside cheddar cheese.",
    image: "http://relish.com/wp-content/uploads/2013/07/usapple_all-american-apple-pie.jpg",
})

const blueberry = new Pie ({
    flavor: "blueberry",
    price: 10,
    description: "Blueberry pie is considered one of the easiest pies to make because it does not require pitting or peeling of fruit. It usually has a top and bottom crust.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLu6OJVY9UegrYC548EK0x7cM1VeLrxNjb-ugHS20SHoJEigx"
})

const pumpkin = new Pie({
    flavor: "pumpkin",
    price: 10,
    description: "Pumpkin pie is a sweet dessert pie with a spiced, pumpkin-based custard filling. The pumpkin is a symbol of harvest time, and pumpkin pie is often eaten during the fall and early winter.",
    image: "https://www.meals.com/imagesrecipes/18470lrg.jpg",
})

const bananaCream = new Pie({
    flavor: "banana cream",
    price: 10,
    description: "A cream pie is a type of pie or cake filled with a rich custard or pudding that is made from milk, cream, flour, and eggs.",
    image: "http://www.bakerssquare.com/i/pies/profile/bananacream_main1.jpg",
})
const chess = new Pie ({
    flavor: "chess",
    price: 10,
    description: "Chess pie is a dessert characteristic of Southern U.S. cuisine. Usually with delicate hints of lemon",
    image: "http://cdn-image.myrecipes.com/sites/default/files/sl_chesspie_1000.jpg"
})
const cherry = new Pie({
    flavor: "cherry",
    price: 10,
    description: "Cherry pie is a pie baked with a cherry filling. Traditionally, cherry pie is made with tart rather than sweet cherries. Morello cherries are one of the most common kinds of cherry used, but other varieties such as the black cherry may also be used.",
    image: "http://images.media-allrecipes.com/userphotos/960x960/3758031.jpg",
})

const strawberry = new Pie({
    flavor: "strawberry",
    price: 10,
    description: "Strawberry pie is a dessert food consisting mainly of strawberries.",
    image: "https://i.ytimg.com/vi/FD1B6FOjySA/maxresdefault.jpg",
})

const rhubarb = new Pie({
    flavor: "rhubarb",
    price: 10,
    description: "Rhubarb pie is a pie with a rhubarb filling. Popular in the UK, where rhubarb has been cultivated since the 1600s, its introduction to Europe from China is attributed to Marco Polo",
    image: "https://sallysbakingaddiction.com/wp-content/uploads/2016/05/strawberry-rhubarb-pie-9.jpg",
})

const pecan = new Pie({
    flavor: "pecan",
    price: 10,
    description: "Pecan pie is a pie of pecan nuts mixed with a filling of eggs, butter, and sugar. Variations may include white or brown sugar, sugar syrup, molasses, maple syrup, or honey.",
    image: "https://images-gmi-pmc.edge-generalmills.com/4b6f4317-956e-411d-bc94-875a48246376.jpg",
})

const keyLime = new Pie({
    flavor: "key lime",
    price: 10,
    description: "Key lime pie is an American dessert made of Key lime juice, egg yolks, and sweetened condensed milk in a pie crust. The traditional Conch version uses the egg whites to make a meringue topping.",
    image: "https://www.yourhomebasedmom.com/wp-content/uploads/2014/02/Key-Lime-PIe_0005-e1393270086957.jpg",
})

// SHOP

const pieShop = new Shop ({
    name: "cabinet",
    yearEstablished: 2017
})

/// USERS 

const tim = new User ({
    firstName: "tim",
    lastName: "branzen",
    email: "tim@gmail.com",
    userName: "timbranzen"
})

const bonnie = new User ({
    firstName: "bonnie",
    lastName: "johnson",
    email: "bonnie@gmail.com",
    userName: "bonniejohnson",
})

const peter = new User ({
    firstName: "peter",
    lastName: "frampton",
    email: "peter@gmail.com",
    userName: "peterfrapton",
})

const linda = new User ({
    firstName: "linda",
    lastName: "williams",
    email: "linda@gmail.com",
    userName: "lindawilliams",
})

const graham = new User ({
    firstName: "graham",
    lastName: "nash",
    email: "graham@gmail.com",
    userName: "grahamnash",
})

const laurie = new User ({
    firstName: "laurie",
    lastName: "anderson",
    email: "laurie@gmail.com",
    userName: "laurieanderson",
})

// Uses promises to make sure to remove it run first, then saves new user, pies, shops.

User.remove({})
.then(() => tim.save())
.then(() => bonnie.save())
.then(() => peter.save())
.then(() => linda.save())
.then(() => graham.save())
.then(() => laurie.save())


Pie.remove({})
.then(() => apple.save())
.then(() => blueberry.save())
.then(() => pumpkin.save())
.then(() => bananaCream.save())
.then(() => chess.save())
.then(() => cherry.save())
.then(() => strawberry.save())
.then(() => rhubarb.save())
.then(() => pecan.save())
.then(() => keyLime.save())


Shop.remove({})
.then(() => pieShop.save())


.then(()=> console.log("Successfully Saved"))
.then(() => mongoose.connection.close())



