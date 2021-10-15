const assertEquals = require('../Pair-Programming-Bobs-Burgers/assertEquals');
const Basket = require('../Pair-Programming-Bobs-Burgers/Basket');
const Item = require('../Pair-Programming-Bobs-Burgers/Item');

let baskets;
let item = []
let testName = ''
let expectedOutput = [], actualOutput = [], result
//let itemName = ''
//let itemId;
let maxSize;
//let itemPrice;
let increaseBy;

// Test 1 - Scenario - Adding and item to my basket when user adds item to basket, the item should be pushed onto the end of the array

// Arrange
item = new Item('Milk', 345, 10);
basket = new Basket(item);

item1 = new Item('Biscuits', 350, 3);
basket = new Basket(item1)
expectedOutput = [['Milk', 345, 10], ['Biscuits', 350, 3]];
//console.log(expectedOutput);
// Act
actualOutput1 = basket.addItem(item);
actualOutput = basket.addItem(item1);
//actualOutput = basket.addItem(item);
console.log("scenario 1" + actualOutput);

// Assert
result = assertEquals(expectedOutput, actualOutput)
console.log(result)


// Test 1.2 - Scenario - removing an item to my basket so user can change orfer, the item should be popped off of the array

// Arrange
//item = new Item('Milk', 345, 10);
//basket = new Basket(item);
expectedOutput = [['Biscuits', 350, 3]];

// Act
actualOutput = basket.removeItem(345);
console.log("scenario 2" + actualOutput);

// Assert
result = assertEquals(expectedOutput, actualOutput)
console.log(result)

