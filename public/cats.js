//let fetch = require('node-fetch')

let data = [];
let gooo;
fetch("https://api.punkapi.com/v2/beers/")
    .then(res=>res.text())
    .then(items=>items)