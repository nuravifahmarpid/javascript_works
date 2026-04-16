// expressions and statements
// alert("Hello World!"); statements
// 100 + 200 expression
console.log(100 + 200);     // expressions
console.log("\n");

// numbers and operators
console.log("numbers and operators: ");
console.log(`100 + 200 = ${100 + 200}`);
console.log(`10000 - 999 = ${10000 - 999}`);
console.log(`999 * 111 = ${999 * 111}`);
console.log(`997002 / 999 = ${997002 / 999}`);

// order of operations
console.log("\norder of operations: ");
console.log(`5+10/10-5 = ${5 + 10 / 10 - 5}`);
console.log(`(5+10)/(10-5) = ${(5 + 10) / (10 - 5)}`);

//floating point
console.log("\nfloating point: ");
console.log(`10 / 4 = ${10 / 4}`);
console.log(`10 / 3 = ${10 / 3}`);
console.log(`0.1 + 0.2 ${0.1 + 0.2}`);

// try it yourself 2-1
console.log("\n");
console.log(`The number of seconds in a day: ${24 * 60 * 60}`);

// bindings
console.log("\nbindings");
console.log("1. variables:");
let age;        // declaration variables
age = 35;       // initialization variables

let cats = 2;   // combine declaration and initialization
console.log(`cats = ${cats}`);
cats = 3;       // assignment variables
console.log(`cats = ${cats}`); 

console.log("\n2. constants:");
const PI = 3.141592653589793;
let diameter = 3;
let circumference = diameter * PI;
console.log(`circumference: ${circumference}`);

// incrementing and decrementing
console.log("\nincrementing and decrementing");
let money = 100;
money = money + 1;
console.log(`money: ${money}`);

let temperature = 70;
++temperature       // prefix increment
console.log(`temperature after increment: ${temperature}`);
--temperature       // prefix decrement
console.log(`temperature after decrement: ${temperature}`);

let books = 2;
books++;
console.log(`books after increment: ${books}`);
books--;
console.log(`books after decrement: ${books}`);

// addition and subtraction assignment
console.log("\naddition and subtraction assignment");
let price = 20;
price += 5;
console.log(`price now: ${price}`);

let cookies = 12;
cookies -= 5;
console.log(`cookies: ${cookies}`);

// multiplication and division assignment
console.log("\nmultiplication and division assignment");
let tribbles = 6;
tribbles *= 2;
console.log(`tribbles after multiplication: ${tribbles}`);
tribbles /= 3;
console.log(`tribbles after division: ${tribbles}`);

// try it yourself 2-2
console.log("\n");
let savings = 100;
savings *= 1.08;
console.log(`first saving: ${savings}`);
savings *= 1.08;
console.log(`second saving: ${savings}`);
savings *= 1.08;
console.log(`third saving: ${savings}`);
savings *= 1.08;
console.log(`fourth saving: ${savings}`);
savings *= 1.08;
console.log(`fifth saving: ${savings}`);
savings *= 1.08;
console.log(`sixth saving: ${savings}`);
savings *= 1.08;
console.log(`seventh saving: ${savings}`);
savings *= 1.08;
console.log(`eighth saving: ${savings}`);
savings *= 1.08;
console.log(`ninth saving: ${savings}`);

// strings
console.log("\nstrings:");
let greeting = "Hello!";
console.log(`greeting: ${greeting}`);

let prices = "5 dollars";
console.log(`price is ${prices}`);

// joining strings
console.log("\njoining string:");
let first = "First string";
let second = "Second string";
let joined = first + second;
console.log(`joined two strings: ${joined}`);

joined = first + " " + second;
console.log(`joined two strings with space: ${joined}`);

// finding the length of a string
console.log("\nfinding the length of a string:");
console.log(`abc.length = ${"abc".length}`);

let longString = "This is my very long string."
console.log(`long string.length = ${longString.length}`);

// getting a character from a string
console.log("\ngetting a character from a string:");

let alphabet = "ABCDEFG";
console.log(`alphabet[0]: ${alphabet[0]}`);
console.log(`alphabet[1]: ${alphabet[1]}`);
console.log(`get beyond the length of string: ${alphabet[10]}`);

// getting multiple characters from a string
console.log("\n getting multiple characters from a string by slice:");

let sentence = "My name is Nick.";
console.log(`sentence slice return: ${sentence.slice(3, 7)}`);

// trimming whitespace from a string
console.log("\ntrimming whitespace from a string:");

let inputText = "  Here is my input  ";
let inputTextTrim = inputText.trim();

console.log(`inputText consist of\n${inputText}`);
console.log(`after trim return:\n${inputTextTrim}`);

// str.toLowerCase()
let username = "JEON WONWOO";
let lowerCaseUser = username.toLowerCase();

console.log(`username: ${username}`);
console.log(`lowercase username: ${lowerCaseUser}`);

// str.includes()
console.log(`WOO includes in username? ${username.includes("WOO")}`);
console.log(`woo includes in username? ${username.includes("woo")}`);

// str.padStart()
let phoneNumber = '987';
console.log(`Phone number: ${phoneNumber.padStart(12, "*")}`);

// str.padEnd()
console.log(`Phone number: ${phoneNumber.padEnd(12, "*")}`);

// str.repeat()
console.log(`Repeat username: ${username.repeat(3)}`);

/* try it yourself 2-3
console.log(`Repeat username: ${username.repeat(-1)}`); // error */

// escape sequences
console.log("\nescape sequence");
console.log("Hello\nWorld");
console.log("This string has \"double quotes\" and a \\ back slash character");

// try it yourself 2-4
console.log("seventeen members:\t\n1.\"Scoups\"\t\n2.\'Jeonghan\'\t\n3.\\Joshua\\");

// template literals
console.log("\ntemplate literals");
let name = "Nick";
console.log(`Hello ${name}!`);

console.log(`There are ${60 * 60 * 24} seconds in a day`);

let noun = "moon";
let adverb = "strangely";
let adjective = "red";

console.log(`The ${noun} was ${adverb} ${adjective}.`); // use template literals

// undefined and null
console.log("\nundefined and null");

let nothing;
console.log(nothing);

let address = null;
console.log(address);

// booleans
console.log("\nbooleans");

let playing = true;
console.log(`playing return ${playing}`);

// logical operators
console.log("\nlogical operators");

let powerup = true;
let jumping = true;

console.log(`powerup && jumping = ${powerup && jumping}`);

jumping = false;
console.log(`powerup && jumping = ${powerup && jumping}`);

let hitByFireball = false;
let touchedMonster = true;

console.log(`hitByFireball || touchedMonster = ${hitByFireball || touchedMonster}`);

let alive = false;
console.log(`!alive = ${!alive}`);

// comparison operators
console.log("\ncomparison operators");
console.log(`5 === 5 -> ${5 === 5}`);
console.log(`6 === 7 -> ${6 === 7}`);
console.log(`2 + 2 === 4 -> ${2 + 2 === 4}`);
console.log(`"hello" === "hel" + "lo" -> ${"hello" === "hel" + "lo"}`);
console.log(`false === false -> ${false === false}`);
console.log(`true === false -> ${true === false}`);

let answer = 2 + 2;
console.log(`answer === 5 -> ${answer}`);

console.log(`8 !== 8 -> ${8 !== 8}`);
console.log(`"apples" !== "oranges" -> ${"apples" !== "oranges"}`);

// greater than, less than, greater than or equal to, less than or equal to
console.log(`1 > -1 -> ${1 > -1}`);
console.log(`10 > 10 -> ${10 > 10}`);
console.log(`10 >= 10 -> ${10 >= 10}`);
console.log(`-1 < 1 -> ${-1 < 1}`);
console.log(`10 < 10 -> ${10 < 10}`);
console.log(`10 <= 10 -> ${10 <= 10}`);

console.log("\n");
console.log(`"cat" < "dog" -> ${"cat" < "dog"}`);
console.log(`"abc" > "abbcdef" -> ${"abc" > "abbcdef"}`);

// type coercion
console.log("\n type coercion:");

let statement1 = "Current score: " + 10;
console.log(statement1);

let statement2 = 100 + true;
console.log(statement2);

// equality with coercion
console.log("\nequality with coercion");
console.log(`0 == false -> ${0 == false}`);
console.log(`0 === false -> ${0 === false}`);

console.log(`"1" == 1 -> ${"1" == 1}`);
console.log(`undefined == null -> ${undefined == null}`);
console.log(`undefined == false -> ${undefined == false}`);
console.log(`"" == 0 -> "" == 0`);
console.log(`"" == false ->  ${"" == false}`);

console.log(`0 !== false`); // comparison
console.log(`0 != false`);  // coercion

// truthy
console.log("\ntruthy");
console.log("Ingin membuat angka 0 sebagai false maka:");
console.log(`!0 = ${!0}`);
console.log(`!!0 = ${!!0}`); // dengan cara ini membuat inversi 0 ke booleans
console.log(`!!1 = ${!!1}`);
console.log(`!!"hi" = ${"hi"}`);
console.log(`!!"" = ${!!""}`);
console.log(`!!undefinde = ${!!undefined}`);
console.log(`!!null = ${!!null}`);

console.log(`15 && 17 -> ${15 && 17}`);
console.log(`0 && 20 -> ${0 && 20}`);
console.log(`undefined && null -> ${undefined && null}`);

console.log(`"" || "hello" -> ${"" || "hello"}`);
console.log(`"hello" || "goodbye" -> ${"hello" || "goodbye"}`);

// uses for truthiness
console.log("\nuses of truthiness");
let names;
names = names || "No name provided";
console.log(`names -> ${names}`);

let name1 = "Nick";
name1 = name1 || "No name provided";
console.log(`name1 -> ${name1}`);

let score = 0;
score && console.log(`Your score is ${score}!`);

score++;
score && console.log(`Your score is ${score}!`);