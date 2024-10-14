// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// console.log("2" > 1); // true but Don't compare two different datatypes
// console.log("02" > 1); // true but Don't compare two different datatypes

// console.log(null > 0); // false 
// console.log(null == 0 ); // false
// console.log(null >= 0); // true 

/* 

The reason is that an equality check == and comparisons > < >= =< work differently.
Comaparisons convert null to a number, treating it as 0.
That's why null >= 0 is true and null > 0 is false. 

P.S. Also sometimees it converts null into a number and sometimes into NaN
*/

// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
// console.log(undefined >= 0); // false

// === strict check

// console.log("2" == 2 ); // true // in this the JS converts the sring and then compare 
// console.log("2" === 2 ); // false // but in this JS strictly check and compare


