// conditional and loops
console.log("conditional and loops");

// if statements
console.log("if statement");

let speed = 30;
console.log(`Your current speed is ${speed} mph.`);
if (speed > 25) {
    console.log("Slow down!");
}

speed = 20;
console.log(`Your current speed is ${speed} mph.`);
if (speed > 25) {
    console.log("Slow down!");
} else {
    console.log("You're obeying the speed limit.");
}

// try it yourself 4-1
let randomNum = Math.random();

if (randomNum < 0.5){
    console.log("Heads");
} else {
    console.log("Tails");
}
console.log(`random number is ${randomNum}`);

// more complex conditions
console.log("\nmore complex conditions:");

let hour;
if (speed > 25 && hour > 7 && hour < 16) {

}

// recommend to assign variable for complex condition
let tooFastForSchool = speed > 25 && hour > 7 && hour < 16;
if (tooFastForSchool) {

}

let schoolHours = hour > 7 && hour < 16;
if (speed > 25 && schoolHours) {

}

// chained if... else statements
console.log("\nchained if... else statements:");

speed = 20;
console.log(`Your current speed is ${speed} mph.`);
if (speed > 25){
    console.log("You're driving at a good speed.");
} else if (speed > 15) {
    console.log("You're driving at a good speed.");
} else {
    console.log("You're driving too slowly.");
}

// try experimenting 
if (speed > 25){
    console.log("Slow down!");
} else if (speed > 20) {
    console.log("You're driving at a good speed.");
} else if (speed > 15) {
    console.log("You're driving a little bit too slowly.");
} else if (speed > 10) {
    console.log("You're driving too slowly.");
} else {
    console.log("You're driving far too slowly.");
}

// repeatig code with loops
console.log("\nloops:");
console.log("1. while loops");

speed = 30;
while (speed > 25){
    console.log(`Your current speed is ${speed} mph.`);
    speed--;
}
console.log(`Now your speed is ${speed} mph.`);

// for loops
console.log("\n2. for loops");

for (let speed = 30; speed > 25; speed--) {
    console.log(`Your current speed is ${speed} mph.`);
}

// for ... of loops
console.log("\n3. for...of loops");
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(`${color} is a color.`);
}

// for... of loops index
console.log("\nfor... of loops index");
for (let index = 0; index < colors.length; index++) {
    console.log(`${colors[index]} is a color.`);
}

// for of loops get index with entries
console.log("\nfor...of loops with entries");
for (let [index, item] of colors.entries()) {
    console.log(`${index}: ${item} is a color.`);
}

// destructuring assignment
let rgbcolor = [125, 100, 0];
let [r, g, b] = rgbcolor;

console.log(`r: ${r}`);
console.log(`g: ${g}`);
console.log(`b: ${b}`);

// try it yourself 4-2
let names = "Nick";
for (let letter of names){
    console.log(letter);
}

// 4-3
splitName = names.split("");
console.log(splitName);
for (let [idx, letter] of splitName.entries()){
    console.log(`${letter} ${idx}`);
}

// 4-4
console.log("for loops solutions");
for (let idx= 0; idx < splitName.length; idx++){
    console.log(`${splitName[idx]} ${idx}`);
}

// for...in loops
console.log("\nfor...in loops");
let me = {
    "first name": "Nick",
    "last name": "Morgan",
    "age": 39
};

for (let key in me) {
    console.log(`My ${key} is ${me[key]}.`);
}