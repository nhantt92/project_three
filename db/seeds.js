require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise


const { Shop, Pies, User, Review } = require("./schema")


const yum = new Review({
    title: 'Yum',
    description: "the best"

})

const loveit = new Review({
    title: 'so good',
    description: "loved it"

})

// PIES

const apple = new Pies ({
    flavor: "apple",
    price: 10,
    description: "The all-American favorite! An apple pie, regional variation apple tart, is a fruit pie, in which the principal filling ingredient is apple. It is, on occasion, served with whipped cream or ice cream on top, or alongside cheddar cheese.",
    // image: "https://i.imgur.com/IuABb8S.jpg",
    image: "https://i.imgur.com/d0DKwo7.jpg",
    reviews: [yum, loveit]
})

const blueberry = new Pies ({
    flavor: "blueberry",
    price: 10,
    description: "Blueberry pie is considered one of the easiest pies to make because it does not require pitting or peeling of fruit. It usually has a top and bottom crust.",
    image: "https://i.imgur.com/hwaLcLv.jpg",
    reviews: []
})

const pumpkin = new Pies ({
    flavor: "pumpkin",
    price: 10,
    description: "Pumpkin pie is a sweet dessert pie with a spiced, pumpkin-based custard filling. The pumpkin is a symbol of harvest time, and pumpkin pie is often eaten during the fall and early winter.",
    image: "https://i.imgur.com/KGSLCM3.jpg",
    reviews: []
})

const bananaCream = new Pies ({
    flavor: "banana cream",
    price: 10,
    description: "A cream pie is a type of pie or cake filled with a rich custard or pudding that is made from milk, cream, flour, and eggs.",
    image: "https://i.imgur.com/HHKQIhe.jpg",
    reviews: [yum, loveit]
})
const chess = new Pies ({
    flavor: "chess",
    price: 10,
    description: "Chess pie is a dessert characteristic of Southern U.S. cuisine. Usually with delicate hints of lemon",
    // image: "https://i.imgur.com/5gbBZrS.jpg",
    image: "https://i.imgur.com/vqFfFfx.jpg",
    reviews: []
})
const cherry = new Pies ({
    flavor: "cherry",
    price: 10,
    description: "Cherry pie is a pie baked with a cherry filling. Traditionally, cherry pie is made with tart rather than sweet cherries. Morello cherries are one of the most common kinds of cherry used, but other varieties such as the black cherry may also be used.",
    // image: "https://i.imgur.com/94yR0Gm.jpg",
    image: "https://i.imgur.com/BrpggM1.jpg",
    reviews: []
})

const strawberry = new Pies ({
    flavor: "strawberry",
    price: 10,
    description: "Strawberry pie is a dessert food consisting mainly of strawberries.",
    // image: "https://i.imgur.com/ROTcGBD.jpg",
    image: "https://i.imgur.com/bxjQ65E.jpg",
    reviews: [yum]
})

const frenchSilk = new Pies ({
    flavor: "french silk",
    price: 11,
    description: "French Silk Pie is chocolate lovers dream.  Flaky and buttery homemade pie crust with rich and silky chocolate filling , piled high with whipped cream and lots of chocolate shavings on top. If you are chocolate addicts, you must make this pie.",
    image: "https://i.imgur.com/eBi02hO.jpg",
    reviews: [loveit]
})

const rhubarb = new Pies ({
    flavor: "rhubarb",
    price: 10,
    description: "Rhubarb pie is a pie with a rhubarb filling. Popular in the UK, where rhubarb has been cultivated since the 1600s, its introduction to Europe from China is attributed to Marco Polo",
    // image: "https://i.imgur.com/LO1LWbG.jpg",
    image: "https://i.imgur.com/eliU7Ft.jpg",
    reviews: []
})

const pecan = new Pies ({
    flavor: "pecan",
    price: 10,
    description: "Pecan pie is a pie of pecan nuts mixed with a filling of eggs, butter, and sugar. Variations may include white or brown sugar, sugar syrup, molasses, maple syrup, or honey.",
    // image: "https://i.imgur.com/aW5ZuT1.jpg",
    image: "https://i.imgur.com/nXjCNiJ.jpg",
    reviews: []
})

const keyLime = new Pies ({
    flavor: "key lime",
    price: 10,
    description: "Key lime pie is an American dessert made of Key lime juice, egg yolks, and sweetened condensed milk in a pie crust. The traditional Conch version uses the egg whites to make a meringue topping.",
    // image: "https://i.imgur.com/0gUOGp4.jpg",
    image: "https://i.imgur.com/zdcMZtD.jpg",
    reviews: []
})

const chocolateBottom = new Pies ({
    flavor: "chocolate bottom",
    price: 10,
    description: "We make the ultimate cream pie by adding a chocolate layer to a creamy banana pie filling and topping with chocolate curls.",
    // image: "https://i.imgur.com/6aorLBn.jpg",
    image: "https://i.imgur.com/tlaFJZp.jpg",
    reviews: []
})

// SHOP

const pieShop = new Shop ({
    name: "cabinet",
    yearEstablished: 2017,
    pies: [apple, blueberry, pumpkin, bananaCream, chess, cherry, strawberry, frenchSilk, rhubarb, pecan, keyLime, chocolateBottom]
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
    userName: "bonniejohnson"
})

const peter = new User ({
    firstName: "peter",
    lastName: "frampton",
    email: "peter@gmail.com",
    userName: "peterfrapton"
})

const linda = new User ({
    firstName: "linda",
    lastName: "williams",
    email: "linda@gmail.com",
    userName: "lindawilliams"
})

const graham = new User ({
    firstName: "graham",
    lastName: "nash",
    email: "graham@gmail.com",
    userName: "grahamnash"
})

const laurie = new User ({
    firstName: "laurie",
    lastName: "anderson",
    email: "laurie@gmail.com",
    userName: "laurieanderson"
})

// Uses promises to make sure to remove it run first, then saves new user, pies, shops.


// const users = [tim, bonnie, peter, linda, graham, laurie]
// const shops = [pieShop]
// const pies = [apple, blueberry, pumpkin, bananaCream, chess, cherry, strawberry, rhubarb, pecan, keyLime]



Shop.remove({})
.then(() => pieShop.save())
.then(()=> console.log("Successfully Saved Pie Shop"))


User.remove({})
.then(() => tim.save())
.catch((error) => {console.log(error)})
.then(() => bonnie.save())
.catch((error) => {console.log(error)})
.then(() => peter.save())
.catch((error) => {console.log(error)})
.then(() => linda.save())
.catch((error) => {console.log(error)})
.then(() => graham.save())
.catch((error) => {console.log(error)})
.then(() => laurie.save())
.catch((error) => {console.log(error)})
.then(() => console.log("Successfully Users"))
.then(() => mongoose.connection.close())









/// Danny's eloquent way
// User.remove({})
//     .then(() => {
//     return User.insertMany(users)
// })
//     .then(() =>{
//     console.log('Users Saved!')
// return Shop.remove({})
// })
//     .then(() => {
//     return
//     Shop.insertMany(shops)
// }).then(() => {
//     console.log('Shops Saved')
// })
// .catch((error) => {
//     console.log(error);
// })
// .then(() => {
//     db.close()
// })





// Pie.remove({})
// .then(() => apple.save())
// .then(() => blueberry.save())
// .then(() => pumpkin.save())
// .then(() => bananaCream.save())
// .then(() => chess.save())
// .then(() => cherry.save())
// .then(() => strawberry.save())
// .then(() => rhubarb.save())
// .then(() => pecan.save())
// .then(() => keyLime.save())


// saving users
// tim.save()
// bonnie.save()
// peter.save()
// peter.save()
// linda.save()
// graham.save()
// laurie.save()

// Saving the shop full of pies

// shops.forEach(shop => {
//     shop.pies = pies

//     shop.save()
//     .then((shop) => {
//         console.log(`${shop.name} saved`)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// })