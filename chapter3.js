// arrays
// creating and indexing

console.log("arrays");
console.log("creating and indexing:");

let primes = [2, 3, 5, 7, 11, 13, 17, 19];
console.log(`array primes: ${primes}`);
console.log(`first element primes array: ${primes[0]}`);
console.log(`last element: ${primes[7]}`);
console.log(`last element: ${primes[primes.length - 1]}`);
console.log(`index outside the range: ${primes[10]}`);

console.log(`\nto replace an element in an array:`);
primes[2] = 1;
console.log(`new primes: ${primes}`);

// arrays of arrays
console.log("\narrays of arrays");
let ticTacToe = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
console.log(`tictactoe: ${ticTacToe}`);

console.log(`setting element of arrays:`);
ticTacToe[0][2] = "X";
console.log(`tictactoe: ${ticTacToe}`);

// try it yourself 3-1
ticTacToe[1][2] = "O";
ticTacToe[0][1] = "X";
ticTacToe[0][0] = "O";
ticTacToe[1][1] = "X";
ticTacToe[1][0] = "O";
ticTacToe[2][0] = "X";
console.log(ticTacToe);

// array methods
console.log("\narray method:");

// adding an element to an array
let languages = [];
languages.push("Python");
languages.push("Haskell");
languages.push("Javascript");
languages.push("Rust");

console.log(`languages array: ${languages}`);

// adding an element to beginning element 
languages.unshift("Erlang");
languages.unshift("C");
languages.unshift("Fortran");

console.log(`after adding elements: ${languages}`);

// removing last elements from an array
languages.pop();
console.log(`\nafter remove the last element: ${languages}`);

let bestLanguage = languages.pop();
let message = `My favorite language is ${bestLanguage}`;

console.log(message);
console.log(languages);

// removing first elements from an array
let worstLanguage = languages.shift();
message = `My least favorite language is ${worstLanguage}.`;
console.log(message);
console.log(languages);

// try it yourself 3-2
let rainbow = [];
rainbow.push("Green");
rainbow.push("Blue");
rainbow.push("Indigo");
rainbow.push("Violet");
rainbow.unshift("Yellow");
rainbow.unshift("Orange");
rainbow.unshift("Red");

console.log(`rainbow is ${rainbow}`);

// combining arrays
console.log("\ncombining arrays:");

let fish = ["Salmon", "Cod", "Trout"];
let mammals = ["Sheep", "Cat", "Tiger"];
let animals = fish.concat(mammals);
console.log(animals);

console.log("combining three arrays:");

let originals = ["Hope", "Empire", "Jedi"];
let prequels = ["Phantom", "Clones", "Sith"];
let sequels = ["Awakens", "Last", "Rise"];
let starWars = prequels.concat(originals, sequels);
console.log(starWars);

// finding the index of an element in an array
let sizes = ["Small", "Medium", "Large"];
console.log(`sizes.indexOf("Medium") -> ${sizes.indexOf("Medium")}`);
console.log(`sizes.indexOf("Huge") -> ${sizes.indexOf("Huge")}`);

// first matching only
let flagOfArgentina = ["Blue", "White", "Blue"];
console.log(`flagOfArgentina.indexOf("Blue") -> ${flagOfArgentina.indexOf("Blue")}`);

// turning an array into a string
let beatles = ["John", "Paul", "George", "Ringo"];
console.log(`beatles.join() -> ${beatles.join()}`);
console.log(`beatles.join("") -> ${beatles.join("")}`);
console.log(`beatles.join(" ") -> ${beatles.join(" ")}`);
console.log(`beatles.join("&\\n") -> ${beatles.join("&\n")}`);

console.log([100, true, false, "hi"].join("-"));

// try it yourself 3-3
console.log(["X", "X", "X"].join("o"));

// other useful array methods
// arr.includes()
console.log("\nother useful array methods:");
let books = [ 
    "men without women", 
    "teka-teki rumah aneh",
    "pasien"
];
console.log(`is it aroma karsa included by books array? ${books.includes("aroma karsa")}`);

console.log("\nbooks array in order: ${books}");
console.log(`books in reverse order: ${books.reverse()}`);
console.log(`sorting books title: ${books.sort()}`);

let members = [
    "scoups", 
    "jeonghan", 
    "joshua",
    "jun",
    "hoshi",
    "wonwoo",
    "woozi",
    "the8",
    "mingyu",
    "dk",
    "seungkwan",
    "vernon",
    "dino"
];

console.log(`\nfull members of seventeen: ${members}`);
console.log(`members from 6-9: ${members.slice(5,9)}`);
console.log(`remove member number 1-3: ${members.splice(0,3)}`);

// objects
console.log("\nobjects:");
console.log("creating objects");

let casablanca = {
    "title": "casablanca", 
    "released": 1942, 
    "director": "Michael Curtiz"
};
console.log("accessing object values:");
console.log(`objects title: ${casablanca["title"]}`);
console.log(`objects released: ${casablanca["released"]}`);
console.log(`objects director: ${casablanca.director}`);

/* valid identifier ketika key tidak menggunakan spasi
contohnya key1, key_2
*/
let obj = {
    key1: 1,
    key_2: 2,
    "key 3": 3, 
    "key#4": 4,     // karena pakai simbol
};

// calling valid identifier use dot
console.log(obj.key1);  // valid identifier
console.log(obj.key_2); // valid identifier
console.log(obj["key 3"]);  // identifier
console.log(obj["key#4"]);  // identifier

// setting object values
let dictionary = {};

dictionary.mouse = "A small rodent";
dictionary["computer mouse"] = "A pointing device for computers";
console.log(dictionary);

dictionary.mouse = "A furry rodent";
console.log(dictionary);

// getting an object's keys
console.log(`\ngetting an object's keys:`);
let cats = {
    "Kiki": "black and white",
    "Mei": "tabby", 
    "Moona": "gray"
};
console.log(`keys of cats object: ${Object.keys(cats)}`);

// getting an object's keys and values
let chromosomes = {
    koala: 16,
    snail: 24,
    giraffe: 30,
    cat: 38
};
console.log(`getting keys and values: ${Object.entries(chromosomes)}`);

// combining objects
let physical = {
    pages: 208, binding: "Hardcover"
};
let contents = {
    genre: "Fiction", subgenre: "Mystery"
};
let book = {};
Object.assign(book, physical, contents);
console.log(book);

Object.assign(physical, contents);
console.log(physical);

// nesting objects and arrays
// nesting with literal
console.log("\nnesting objects and arrays:");
console.log("nesting with literal");

let trilogies = [
    {
        title: "His Dark Materials",
        author: "Philip Pullman",
        books: ["Northern Lights", "The Subtle Knife", "The Amber Spyglass"]
    },
    {
        title: "Broken Earth", 
        author: "N. K. Jemisin",
        books: ["The Fifth Season", "The Obelisk Gate", "The Stone Sky"]
    }
];
console.log("Accessing inner arrays from object:");
console.log(trilogies[1].books[0]);

// nesting with variables
console.log("\nnesting with variables:");
let penny = {
    name: "Penny", 
    value: 1,
    weight: 2.5   
};

let nickel = {
    name: "Nickel", 
    value: 5,
    weight: 5
};

let dime = {
    name: "Dime",
    value: 10,
    weight: 2.268
};

let quarter = {
    name: "Quarter",
    value: 25,
    weight: 5.67
};

let change = [quarter, quarter, dime, penny, penny, penny];
console.log("accesing inner objects:");
console.log(change[0].value);

console.log("\nupdate object value:");
penny.weight = 2.49;
console.log(change[3].weight);
console.log(change[4].weight);
console.log(change[5].weight);

change[3].weight = 2.5;     // use variables change all the same variables update
console.log(change[3].weight);
console.log(change[4].weight);
console.log(change[5].weight);

// try it yourself 3-4
console.log(quarter);
quarter.value = 50;

console.log(`update quarter variable: ${quarter}`);
console.log(change);    // change the value to the arrays

// exploring nested objects in the console
let nested = {
    name: "Outer",
    content: {
        name: "Middle", 
        content: {
            name: "Inner", 
            content: "whoa.."
        }
    }
};
console.log("\ngetting the value of innermost object's content:");
console.log(nested.content.content.content);
console.log(nested);

// printing nested objects with JSON.stringify
console.log(JSON.stringify(nested));