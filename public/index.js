// create global variables to be accessed to from severl different functions
let cart = [];
let totalPrice = [];

// creates the list of products pulling from product.js
// loops through the products and creates a div for each one
function Products(products) {
    let productDivs = "";
    for (let i=0; i < products.length; i++) {
        let product = products[i];
        productDivs += 
            `<div>
                ${product.name}: ${product.price}<br>
                <select id=${product.id -1}>
                    <option value="0">--Quantity--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <button onclick=addToCart(${product.id -1})>Add to Cart</button>
                <button onclick=viewDetails(${product.id -1})>View Details</button>
            </div><br>`
        }
    document.getElementById("products").innerHTML = productDivs;
}
// product.id is used to capture the item because we needed to pass in a number to the addToCart
// function so to be used as an index

window.onload = function() {
    Products(products);
    let retrievedObject = sessionStorage.getItem('cartSession');
    let retrievedPrice = sessionStorage.getItem('priceSession');
    // an error will occur if the sessionStorage.getItem is ran when the sessionStorage is empty
    if (retrievedObject != null) {
        cart = JSON.parse(retrievedObject);
        totalPrice = JSON.parse(retrievedPrice);
    }
    console.log(cart, totalPrice);
}
// loading the product list upon onload
// retrieving the sessionStorage upon onload

// using target as parameter since the function was first declared in the products function
function addToCart(target) {
    let quantity = document.getElementById(target).value;
    // retrieves the product.id-1 (for index)
    // the product.id-1 was used as an id to allow the function to also use the quantity selector
    // the item will be pushed to the cart the quantity selected by decreaing quantity by 1 each time.
    while (quantity != 0) {
        totalPrice.push(products[target].price);
        cart.push(products[target].name);
        quantity -= 1
    }
    console.log(cart);
    console.log(totalPrice);
    // turn global arrays into strings to setItem in storageSession each time an item is added to the cart.
    let cartStr = JSON.stringify(cart);
    sessionStorage.setItem("cartSession", cartStr);
    let priceStr = JSON.stringify(totalPrice);
    sessionStorage.setItem("priceSession", priceStr);
    viewCart(cart);
    Products(products);
}

// the cart array is made visiable and takes in the target parameter which is calling product.is-1
function viewCart(target) {
    let cartDivs = "";
    for (let i = 0; i < target.length; i++) {
        let cartItems = target[i];
        cartDivs += 
            `<div>
                ${i+1}: ${cartItems}
                <button onclick=removeItem(${target.indexOf(target[i])})>Remove Item</button>
            </div><br>`
    }
    document.getElementById("cart").innerHTML = cartDivs;
}
// creates a div for each item added to the cart and also creates a remove button
// the parameter is product.id-1.indexOf(product.id-1[i])

// both arrays are emptied by declaring empty arrays
function clearCart() {
    cart = [];
    totalPrice = [];
    viewCart(cart);
}

// 
function categories(target) {
    document.getElementById("all").innerHTML = "All";
    if (target === "all") {
        Products(products)
    } else {
    let cat = products.filter(p=>p.category == target)
    Products(cat);
    }
}

function removeItem(target) {
    cart.splice(target, 1);
    totalPrice.splice(target, 1)
    let cartStr = JSON.stringify(cart);
    sessionStorage.setItem("cartSession", cartStr);
    let priceStr = JSON.stringify(totalPrice);
    sessionStorage.setItem("priceSession", priceStr);
    viewCart(cart);
    Products(products);
    console.log(cart);
    console.log(totalPrice);
}

function viewDetails(target) {
    if (document.getElementById("products").style.display = "block") {
        document.getElementById("products").style.display = "none";
        document.getElementById("details").style.display = "block";
    }
    let showDetails = 
    `<div id="details">
        <button onclick=hideDetails()>Back to Product List</button>
        <div>Price: ${products[target].price}</div><br>
        <div>Description: ${products[target].description}</div><br>
        <img src=${products[target].imgUrl}></img>
    <div>`
    document.getElementById("details").innerHTML = showDetails;
}

function hideDetails() {
    if (document.getElementById("details").style.display = "block") {
        document.getElementById("products").style.display = "block";
        document.getElementById("details").style.display = "none";
    }
}

function search() {
    let searchWord = document.getElementById("input").value;
    let newWord = searchWord.toLowerCase();
    let filteredProducts = products.filter(p=>p.name.toLowerCase().includes(newWord));
    Products(filteredProducts);
}

function checkout() {
    let form =   
        `<form>
            First Name: <input></input><br>
            Last Name: <input></input><br>
            Email: <input></input><br>
        </form>`
    document.getElementById("form").innerHTML = form;
}

function placeOrder() {
    let total = [0];
    for (let i=0; i<totalPrice.length; i++) {
        let num = totalPrice[i].split('')
        num.shift();
        let go = num.join('');
        total.push(go);
    }
    let newPrice = total.map(p=>Number(p));
    let price = newPrice.reduce((p,j)=>{return p+j});
    price = '$'+price.toFixed(2);
    document.getElementById("price").innerHTML = price;
}

let timeout;

function myFunction() {
  timeout = setTimeout(function(){ alert("Are you still there?"); }, 60000);
}
myFunction();

function stopAlert() {
  clearTimeout(timeout);
  myFunction();
}