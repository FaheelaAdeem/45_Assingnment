"use strict";
//Equality and inequality test 1
console.log("Equality test with string:", "Apple" === "Apple");
//Equality and inequality test 2
console.log("inequality test with string:", "Apple" != "mango");
//Test using the lower case function 
console.log("lower case function test", "HELLO".toLowerCase() == "hello");
//Numerical tests involving equality
console.log("Equality test with numbers:", 5 === 5);
//Numerical tests involving inequality
console.log("inequality test with numbers:", 5 != 5);
//Greater than test
console.log("Greater than test:", 26 > 10);
//less than test
console.log("less than test:", 20 < 15);
//Greater than or equal to
console.log("Greater than or equal to test:", 10 >= 10);
//less than or equal to 
console.log("less than or equal to test:", 8 <= 5);
//Tests using "and" operater
console.log("And operater test:", 5 === 5 && 5 > 10);
//Tests using "or" operater
console.log("or operater test:", 5 === 5 || 5 === 10);
//Test wheather an item is in a array 
const fruits = ["Banana", "Orange", "Grapes"];
console.log('Test "Orange" is in a array', fruits.includes("Orange"));
//Test weather an item is not in a array
const vegetable = ["Onion", "Tomato", "cabbage"];
console.log('Test "Onion" is not in a array', vegetable.includes("Brinjal"));
