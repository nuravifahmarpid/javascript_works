// functions
console.log("function");

// declaring and calling functions
console.log("declaring and calling functions:");

function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

sayHello("Nick");
sayHello("Mei");

// return values
console.log("\nreturn values");
function add(x, y) {
    return x + y;
}

add(1, 2);

let sum = add(500, 500);    // return value bisa menyimpan nilai ke variable
console.log(`I walked ${sum} miles.`);

// try it yourself 5-1
function sayHello(name) {
    return `Hello, ${name}!`
}

sayHello("wonwoo")
let greeting = sayHello("jeon wonwoo").toUpperCase()
console.log(greeting);

// parameter types
console.log("\nparameter types");
add("Hello, ", "world!");   // argument add function bisa berganti tipe data
add(true, false);
add(1, '1');

// side effect
var  addCalls= 0;

function add(x, y) {
    addCalls++;
    console.log(`x was ${x} and y was ${y}`);
    return x + y;
}

let sum1 = add(Math.PI, Math.E);
console.log(addCalls);
console.log(sum1);

// passing a function as an argument
function sayHi() {
    console.log("Hi!");
}
console.log(setTimeout(sayHi, 2000));
console.log(sayHi);     // refer function
console.log(sayHi());   // call function

// function expression
// anonymous functions
console.log("function expression:");
let addExpression = function (x, y) {
    return x + y;
};
console.log(addExpression(1, 2));

// arrow function
console.log("\narrow functions:");
let addArrow = (x, y) => {
    return x + y;
};
console.log(addArrow(1000, 1));

// concise body
console.log("\nconcise body:");
let addArrowConcise = (x, y) => x + y;
let squared = x => x * x

console.log(addArrowConcise(38, 18));
console.log(squared(16));

console.log("\n");
// try it yourself 5-2
function englishNumber(number) {
    let numberLatin = ["zero", "one", "two", "three", "four", "five"];
    return numberLatin[number];
}

console.log(englishNumber(5));

let numberName = function(number) {
    let numberLatin = ["zero", "one", "two", "three", "four", "five"];
    return numberLatin[number];
};

console.log(numberName(0));

let numName = (number) => {
    let numberLatin = ["zero", "one", "two", "three", "four", "five"];
    return numberLatin[number];
};

console.log(numName(3));

let callMoments = 0;
function callFunc() {
    callMoments++;
    console.log(`This function called ${callMoments} times`);
}

console.log(callFunc());

let printDateTime = () => {return new Date()};

let showDateTime = function () {
    return new Date();
};

function showDateTime1() {
    console.log(new Date());
}

console.log(printDateTime());
console.log(showDateTime());
console.log(showDateTime1());

// rest parameter
// the rest of parameter behave as an array
console.log("\nrest parameter:");

let myColors = (name, ...favoriteColors) => {
    let colorString = favoriteColors.join(", ");
    console.log(`My name is ${name} and my favorite colors are ${colorString}.`);
};

myColors("Nick", "blue", "green", "orange");
myColors("Boring", "gray");
myColors("Indecisive", "red", "orange", "yellow", 
    "green", "blue", "indigo", "violet");

function sum2(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}
console.log(sum2(1, 2, 3, 4, 5));
console.log(sum2(6, 7, 8, 9, 10, 11, 12, 13));

// finding an array element
console.log("\nfinding an array element:");

let shoppingList = ["Milk", "Sugar", "Bananas", "Ice Cream"];
console.log(shoppingList.find(item => item.length > 6));

// filtering the elements of an array
console.log("\nfiltering the elements of an array:");
console.log(shoppingList.filter(item => item.length > 6));

// transforming each element of an array
console.log("\ntransforming each element of an array:");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let cubes = numbers.map(x => x ** 3);

console.log(`use map method: ${cubes}`);

// using map method more concise than tradisional for... of loops
let cubes1 = [];
for (let number of numbers) {
    cubes1.push(number ** 3);
}
console.log(`use for... of loops: ${cubes1}`);

// want to get price for objects array
let stockList = [
    {name: "Cheese", price: 3},
    {name: "Bread", price: 1}, 
    {name: "Butter", price: 2}
];

let prices = stockList.map(item => item.price);
console.log(prices);

// custom functions that take callbacks
console.log("\ncustom functions that take callbacks:");

function doubler(callback) {
    callback();
    callback();
}

doubler(() => console.log("Hi there!"));

function callMultipleTimes(times, callback) {
    for (let i = 0; i < times; i++) {
        callback(i);
    }
}
callMultipleTimes(3, time => console.log(`This was time: ${time}`));

// functions that return functions
console.log("\nfunctions that return functions:");

function makeAppender(suffix) {
    return function (text){
        return text + suffix;
    }
}

let exciting = makeAppender("!!!");
console.log(exciting("Hello"));

let puzzling = makeAppender("???");
console.log(puzzling("Hello"));

let winking = makeAppender(";-)");
console.log((winking("Hello")));

console.log(winking("Goodbye"));
console.log(puzzling("Goodbye"));
console.log(exciting("Goodbye"));

// try it yourself 5-3
console.log("\n");
function makeWrapper(prefix, suffix){
    return function fullsentence(sentence){
        return `${prefix} ${sentence} ${suffix}`
    } 
}

let bracketWrapper = makeWrapper("[", "]");
console.log(bracketWrapper("Bracket me!"));

let bracesWrapper = makeWrapper("{", "}");
console.log(bracesWrapper("Brace me!"));