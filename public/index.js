let cart = [];
let totalPrice = [];

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

window.onload = function() {
    Products(products);
    console.log(products);
    let retrievedObject = sessionStorage.getItem('cartSession');
    cart = JSON.parse(retrievedObject);
    let retrievedPrice = sessionStorage.getItem('priceSession');
    totalPrice = JSON.parse(retrievedPrice);
    console.log(cart, totalPrice);
}

function addToCart(target) {
    let quantity = document.getElementById(target).value;
    while (quantity != 0) {
        totalPrice.push(products[target].price);
        cart.push(products[target].name);
        quantity -= 1
    }
    console.log(cart);
    console.log(totalPrice);
    let cartStr = JSON.stringify(cart);
    sessionStorage.setItem("cartSession", cartStr);
    let priceStr = JSON.stringify(totalPrice);
    sessionStorage.setItem("priceSession", priceStr);
    viewCart(cart);
    Products(products);
}

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

function clearCart() {
    cart = [];
    totalPrice = [];
    viewCart(cart);
}

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
    viewCart(cart);
    Products(products);
    console.log(cart)
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
    let total = [];
    for (let i=0; i<totalPrice.length; i++) {
        let num = totalPrice[i].split('')
        num.shift();
        let go = num.join('');
        total.push(go);
    }
    console.log("1: " + total)
    let newPrice = total.map(p=>Number(p));
    console.log("2: " + newPrice)
    let price = newPrice.reduce((p,j)=>{return p+j});
    price = '$'+price.toFixed(2);
    document.getElementById("price").innerHTML = price;
    console.log("3: " + price)
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