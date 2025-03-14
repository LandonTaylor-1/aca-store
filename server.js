const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const carts = require('./db').carts;
const comments = require('./db').comments;
const orders = require('./db').orders;
const products = require('./db').products;
const users = require('./db').users;

// change this to your mongodb atlas uri
const url = 'mongodb+srv://user-1:12345@aca-practice-jd9cz.mongodb.net/test?retryWrites=true';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(doStuffAfterConnected, { useNewUrlParser: true });

function doStuffAfterConnected(err){
    if(err){
      console.log(err);
      return;
    }
    console.log("Connected successfully to server");
    const db = client.db("aca-store");
    insertSomething(db,()=>{
      findSomething(db,()=>{
        client.close();
      });
    });
}

const findSomething = function(db,callback) {
    // Get the documents collection
    const collection = db.collection('products');
    // Find some documents
    let found = collection.find({products});
    found.toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback();
    });
  }
const insertSomething = function(db,callback) {
    // Get the documents collection
    const collection = db.collection('products');
    // Insert some documents
    collection.insertMany(products, function(err, result) {
      console.log("Inserted documents into the collection");
      callback();
    });
  }