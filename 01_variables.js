const accountId = 1445
let accountEmail = "psr@gmail.com"
var accountPassword = "1234"
accountcity = "jaipur"

// accountId = 2

console.log(accountId);

accountEmail = "pushpendra@gmail.com"
accountPassword = "001234"
accountcity = "shujalpur"

/*
 prefer not to use var
 because of issue in block scope and functional scope
*/
console.table([accountEmail,accountId,accountPassword,accountcity])

