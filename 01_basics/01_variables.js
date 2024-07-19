const accountId = 144452
let accountEmail = "ayush@google.com"
var accountPassword = "123516"
accountCity = "Jaipur"
let accountState;

// accountId = 2555 not allowed


/*
Prefer not to use var
because of the issue in block scope and functional scope
*/


accountPassword = "6512"
accountEmail = "h@google.com"
accountCity = "Kota"
console.log("accountId");

console.table([accountEmail, accountState,accountId, accountPassword, accountCity])

