// singleyon => apne tarh ke ek hi object hi h 


// Objects Literals
// Object.create()

const mySym  = Symbol("Key1")

const userJs = {
    name:"Pushpendra",
    age:18,
    [mySym] : "mYKEYS",
    location:"jaipur",
    email:"abc@gmail.com",
    isloggesIn:false,
    lastLoginDays:["monday","tuesday"]
}
//how to access Objects

console.log(userJs.email);
console.log(userJs["email"]);
console.log(userJs[mySym]);

userJs.email = "rpushpendra.gmial.com"
console.log(userJs.email);
// Object.freeze(userJs)  // changes freeze rne ke liye 
userJs.email = "rpushpendra.com"
console.log(userJs);

// functions 
userJs.greeting = function () {
    console.log("Heloo Js users ");
}
userJs.greetingTwo = function () {
    console.log(`Heloo Js users,${this.name}`); // string intopolation
}
console.log(userJs.greeting());
console.log(userJs.greetingTwo());

