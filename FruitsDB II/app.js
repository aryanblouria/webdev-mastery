const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit ({
  name: {
    type: String;
    required: [true, "No name specified."];
  }
  rating: 4,
  review: "Pretty solid as a fruit"
});

fruit.save();


const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);
const person = new Person ({
  name: "John",
  age: 37
});

person.save();

const banana = new Fruit ({
  name: "Banana",
  rating: 5,
  review: "Pretty average as a fruit"
});

const mango = new Fruit ({
  name: "Mango",
  rating: 9,
  review: "Pretty great as a fruit"
});

Fruit.insertMany([banana, mango], function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully saved all the fruits to fruitsDB");
  }
});

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    })
  }
});

mongoose.connection.close();
