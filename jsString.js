console.log("String Methods");

let myDetails = "My Name is Satya";

//length of a string using method length
console.log("Length of myDetails: ", myDetails.length);

let text = "Apple, Banana, Kiwi";
//Extracting the string
/* 
slice (startPosition, endPosition) -> endPosition is not included
substring(start, end) -> endPosition is not included
substr(startPosition, length) -> till what length we need to extract
*/

//Extract the Banana from text using slice method
let sliceBanana = text.slice(7, 13);
console.log("sliceBanana", sliceBanana); //Banana

let sliceRemainingFruit = text.slice(7);
console.log("sliceRemainingFruit", sliceRemainingFruit); //Banana, Kiwi
//slice with negative start position
let part = text.slice(-4);
console.log("part", part); //kiwi

//substring Method
let substringBanana = text.substring(7, 13);
console.log("substringBanana", substringBanana);

let partSubString = text.substring(-12); //In substring -value it is considered as 0
console.log("partSubString", partSubString); //Apple, Banana, Kiwi

//substr method -> this is removed in ES6
let substrBanana = text.substr(7, 6);
console.log("substrBanana", substrBanana);

//replace method what you want to replace and where you want to replace
//replace will only replace the first match
//replace is case sensitive
//replace will not modify existing string
let newFruitsText = text.replace("Banana", "Mango");
console.log("newFruitsText", newFruitsText); //Apple, Mango, Kiwi

//convert string into uppercase
console.log(myDetails.toUpperCase());
//convert string into lowercase
console.log(myDetails.toLowerCase());

let text1 = "Hello";
let text2 = "How are you";
//concatination
console.log(text1 + text2);
console.log(`${text1} ${text2}`); // string interpolation
console.log(text1.concat(text2));

//trim(), trimStart() and trimEnd()
let trimMe = "       Hello World      ";
console.log(trimMe.trim()); //leading and lagging spaces will be remove
console.log(trimMe.trimStart()); //leading spaces will be remove
console.log(trimMe.trimEnd()); //lagging spaces will be remove

//padStart padEnd
let myNumber = "5";
console.log(myNumber.padStart(5, "*")); //****5
console.log(myNumber.padEnd(2, "$")); //5$

//split -> It will always return Array
let myCSVDetails = "Satya, Anu, Akki, Aashi";
let myCSVDetailsArray = myCSVDetails.split(", ");
console.log(myCSVDetailsArray);

//convert Array into String
/*
toString
join
*/
let myToString = myCSVDetailsArray.toString();
console.log("myToString", myToString);

let joinString = myCSVDetailsArray.join("*");
console.log(joinString);

//search the string
/*
indexOf -> It will return the index position of a string
includes -> 
search
match
*/

console.log(text);
console.log(text.indexOf("Banana")); //7
console.log(text.indexOf("Orange")); //-1

console.log(text.includes("Banana")); //true
console.log(text.includes("Orange")); //false

//startsWith
//endsWith
console.log(text.startsWith("Apple")); // true
console.log(text.startsWith("Banana")); // false
console.log(text.endsWith("Banana")); //false
console.log(text.endsWith("Kiwi")); //true
