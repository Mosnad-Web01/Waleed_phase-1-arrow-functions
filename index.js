// Function Declaration
function foo() {
  return "bar";
}

// Function Expression
const fooExpr = function () {
  return "bar";
};

// Arrow Function Examples
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

const double = (x) => x * 2;
console.log(double(4)); // 8

const sum = (a, b) => {
  console.log(`Adding ${a}`);
  console.log(`Adding ${b}`);
  return a + b;
};
console.log(sum(1, 2)); // 3

const nums = [1, 2, 3];
const squares = nums.map((x) => x ** 2);
console.log(squares); // [1, 4, 9]

// Example with Overdue Items
const overdueItems = [{ className: "pending" }, { className: "pending" }]; // Sample array of items
const finishedItems = overdueItems.map((item) => {
  item.className = "complete";
  return item;
});
console.log(`You finished ${finishedItems.length} items!`); // You finished 2 items!

// Function Expression for divide
const divide = function (a, b) {
  return a / b;
};

// Arrow Function for square
const square = (x) => x * x;

// Arrow Function for add (already defined, but keep for clarity)
const addExact = (a, b) => a + b;

// Exporting functions for testing
module.exports = { divide, square, add: addExact };
