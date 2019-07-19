// create global variables to be accessed to from severl different functions
let cart = [];
let totalPrice = [];
let login = [];

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
    // while (document.getElementById("signin").style.display = "block") {
    //     document.getElementById("shopping").style.display = "none";
    // }
    fetch("http://localhost:3000/products")
    .then(res=>res.json())
    .then(items=>{
        Products(items)
        console.log(items)
    })
    // let retrievedObject = sessionStorage.getItem('cartSession');
    // let retrievedPrice = sessionStorage.getItem('priceSession');
    // // an error will occur if the sessionStorage.getItem is ran when the sessionStorage is empty
    // if (retrievedObject != null) {
    //     cart = JSON.parse(retrievedObject);
    //     totalPrice = JSON.parse(retrievedPrice);
    let retrieveSignIn = localStorage.getItem("signInSession");
    login = JSON.parse(retrieveSignIn);
    if (login != null) {
        document.getElementById("sign").style.display = "none";
        document.getElementById("shopping").style.display = "block";
    }

    // }
    console.log(cart, totalPrice);
}
// loading the product list upon onload
// retrieving the sessionStorage upon onload

function sign() {
    fetch("http://localhost:3000/users")
    .then(res=>res.json())
    .then(items=>{items
        document.getElementById("sign").style.display = "none";
        document.getElementById("shopping").style.display = "block";
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        const newUser = new Object
        newUser.id = items[items.length-1].id +1;
        newUser.email = email;
        newUser.password = password;
        newUser.cartId = items[items.length-1].id +1;
        localStorage.setItem("signInSession", JSON.stringify(newUser));
        if (newUser.email != login) {
            fetch("http://localhost:3000/users", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            })
        }
    })    
    //.then(response => response.json())
}

function shoppingCart() {

}

// using target as parameter since the function was first declared in the products function
function addToCart(target) {
    let quantity = document.getElementById(target).value;
    // retrieves the product.id-1 (for index)
    // the product.id-1 was used as an id to allow the function to also use the quantity selector
    // the item will be pushed to the cart the quantity selected by decreaing quantity by 1 each time.
    fetch("http://localhost:3000/products")
    .then(res=>res.json())
    .then(items=>{items;
        while (quantity != 0) {
            totalPrice.push(items[target].price);
            cart.push(items[target].name);
            quantity -= 1
        }
        console.log(cart);
        console.log(totalPrice);
        // turn global arrays into strings to setItem in storageSession each time an item is added to the cart.
        // let cartStr = JSON.stringify(cart);
        // sessionStorage.setItem("cartSession", cartStr);
        // let priceStr = JSON.stringify(totalPrice);
        // sessionStorage.setItem("priceSession", priceStr);
        viewCart(cart);
        Products(items);
    })
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
    fetch("http://localhost:3000/products")
    .then(res=>res.json())
    .then(items=>{items;
        if (target === "all") {
            Products(items)
        } else {
        let cat = items.filter(p=>p.category == target)
        Products(cat);
        }
    })
}

function removeItem(target) {
    cart.splice(target, 1);
    totalPrice.splice(target, 1)
    // let cartStr = JSON.stringify(cart);
    // sessionStorage.setItem("cartSession", cartStr);
    // let priceStr = JSON.stringify(totalPrice);
    // sessionStorage.setItem("priceSession", priceStr);
    viewCart(cart);
    //Products(products);
    console.log(cart);
    console.log(totalPrice);
}

function viewDetails(target) {
    if (document.getElementById("products").style.display = "block") {
        document.getElementById("products").style.display = "none";
        document.getElementById("details").style.display = "block";
    }
    fetch("http://localhost:3000/products")
    .then(res=>res.json())
    .then(items=>{items;
        let showDetails = 
        `<div id="details">
            <button onclick=hideDetails()>Back to Product List</button>
            <div>Price: ${items[target].price}</div><br>
            <div>Description: ${items[target].description}</div><br>
            <img src=${items[target].imgUrl}></img>
        <div>`
        document.getElementById("details").innerHTML = showDetails;
    })
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
    fetch("http://localhost:3000/products")
    .then(res=>res.json())
    .then(items=>{items;
        let filteredProducts = items.filter(p=>p.name.toLowerCase().includes(newWord));
        Products(filteredProducts);
    })
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

function newItem() {
    document.getElementById("newItemInput").style.display = "block";
    document.getElementById("shopping").style.display = "none";
}

function addItem() {
    fetch("http://localhost:3000/products")
    .then(res=>res.json())
    .then(items=>{items
        let newName = document.getElementById("newName").value;
        let newDescription = document.getElementById("newDescription").value;
        let newPrice = document.getElementById("newPrice").value;
        const newProduct = new Object
        newProduct.id = items[items.length-1].id +1;
        newProduct.name = newName;
        newProduct.description = newDescription;
        newProduct.price = newPrice;
        fetch("http://localhost:3000/products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        })
    })
    document.getElementById("newItemInput").style.display = "none";
    document.getElementById("shopping").style.display = "block";
}

function deleteItem() {
    let newId = document.getElementById("id").value;
    //console.log(newId)
    fetch("http://localhost:3000/products/" + newId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    document.getElementById("newItemInput").style.display = "none";
    document.getElementById("shopping").style.display = "block";
}

function hideDetailsTwo() {
    // if (document.getElementById("details").style.display = "block") {
    //     document.getElementById("products").style.display = "block";
    //     document.getElementById("details").style.display = "none";
    // }
    document.getElementById("newItemInput").style.display = "none";
    document.getElementById("shopping").style.display = "block";
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