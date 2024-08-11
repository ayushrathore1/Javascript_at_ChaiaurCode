// Primitive Type

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // Number
const scoreValue = 100.3 // Number
const isLoggedIn = true // Boolean
const outsideTemp = null // nul
let useremail; // undefined



const id = Symbol('123') // Symbol makes the value unique
const anotherId = Symbol('123')
// console.log(id === anotherId); // false , id and anotherId are not same becuase of property of Symbol
const bigNumber = 4653163678532326n // BigInt


console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object
console.log(typeof useremail); // undefined
console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol
console.log(typeof bigNumber); // bigint



// JavaScript is a Dynamically Typed Language

// Referance Type{Non Primitive} 

// Array, Objects, Functions

const heroes = ["shaktiman", "nagraj", "doga"] // Array
let myobj = {
    name:"hitesh",
    age:22,
} // Object

const myfunction = function(){
    console.log("Hello World");
} // Function

console.log(typeof heroes); // object
console.log(typeof myobj); // object
console.log(typeof myfunction); // function



// +++++++++++++++++++++++++++ MemoryTypes +++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = "myYoutubename"
anothername = "chaiaurcode"
console.log(anothername); // chaiaurcode
console.log(myYoutubename);// hiteshchoudharydotcom

/*
myYoutubename and another name are Strings So they use the Stack Memory Type.
*/

let userOne = {
    email: "user@google.com",
    upi : "user@ybl"

}

let userTwo = userOne

userOne.email = "hitesh@google.com"

console.log(userOne.email);// hitesh@google.com
console.log(userTwo.email);// hitesh@google.com

/* 
userOne and userTwo are object types so they use the Heap Memory Type.
 */