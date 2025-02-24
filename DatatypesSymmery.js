// primitive Datatype =>
 // 7 types  :  string , number ,boolean , null ,undefined, symbol= kisi bhi value ko unique bana ke liye use karte he 
 //BigInt

 const isLoggedIn = false;

const outSideTemp = null

let score = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId );

const bigNumber = 464671811656565656512132132n // bigInt


 // Reference Non-Primitive =>

 // Array , Objects ,Functions

 // Arrays =>

 const heroes = [ "saktiman" , 'naagrraj','Doga']


//objects =>
let myObj = {
    name: "pushpendra",
    age: 20,

}


// Functions

let myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber)



//************************** *//

// Stack Memory (Primitive) , Heap Memory (Non - primitive)

let myName = "Pushpendra"

let anotherName = myName;

anotherName = "ThakurSaab"

console.log(myName)
console.log(anotherName);


let userOne = {
    email:"pushpendra935@gamil.com",
    upi : "9302695171@ybl"
}

let userTwo = userOne

userTwo.email = "thakurPushpendra@gmail.com"

console.log(userOne);
console.log(userTwo);