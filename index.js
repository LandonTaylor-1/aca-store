let express = require("express");
let bodyParser = require("body-parser");
let users = require("./db").users;
let carts = require("./db").carts;
let orders = require("./db").orders;
let products = require("./db").products;
let comments  = require("./db").comments;
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/users", (req, res) => {
    res.json(users)
});

app.get("/users/:idNum", (req, res) => {
    let user = users.filter(p=>p.id == req.params.idNum);
    res.json(user)
});

app.post('/users', (req,res) => {
    let newUser = req.body;
    users.push(newUser);
    res.json(newUser)
});

app.get("/carts", (req, res) => {
    res.json(carts)
});

app.get("/carts/:idNum", (req, res) => {
    let cart = carts.filter(p=>p.id == req.params.idNum);
    res.json(cart)
});

app.post('/carts', (req,res) => {
    let newCart = req.body;
    carts.push(newCart);
    res.json(newCart)
});

app.get("/orders", (req, res) => {
    res.json(orders)
});

app.get("/orders/:idNum", (req, res) => {
    let order = orders.filter(p=>p.id == req.params.idNum);
    res.json(order)
});

app.post('/orders', (req,res) => {
    let newOrder = req.body;
    orders.push(newOrder);
    res.json(newOrder)
});

app.get("/products", (req, res) => {
    res.json(products)
});

app.get("/products/:idNum", (req, res) => {
    let product = products.filter(p=>p.id == req.params.idNum);
    res.json(product)
});

app.post('/products', (req,res) => {
    let newProduct = req.body;
    products.push(newProduct);
    res.json(newProduct)
});

app.delete("/products/:idNum", (req, res) => {
    let product = products.filter(p=>p.id == req.params.idNum);
    let indx = products.indexOf(product[0]);
    products.splice(indx,1);
    res.json(product);
});

app.get("/comments", (req, res) => {
    res.json(comments)
});
  
app.get("/comments/:idNum", (req, res) => {
    let comment = comments.filter(p=>p.id == req.params.idNum);
    res.json(comment)
});

app.post('/comments', (req,res) => {
    let newComment = req.body;
    comments.push(newComment);
    res.json(newComment)
});

app.listen(3000, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now listening for messages on port",3000);
});