let score = "hitesh"

//console.log(typeof score); // number
//console.log(typeof (score)); // number

// Conversion into Number

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber); 

// Nan => Not a Number

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

let isLoggedIn = "hitesh"

// Conversion into Boolean

let booleanisLoggedIn = Boolean(isLoggedIn)
//console.log(booleanisLoggedIn);

 // 1 => true
 // 0 => false
 // "" => false
 // "something" => true

 let someNumber = 33

 let stringNumber = String(someNumber)
//  console.log(stringNumber);
// console.log(typeof stringNumber);

// **************** Operations ******************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(7/2);
// console.log(8%3);

// % => gives Remainder on dividing a number by another number

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
gameCounter++;
console.log(gameCounter);