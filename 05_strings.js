const name = "Pushpendra "
const age = 20

// console.log(name + "Thakur " + age);
// string intopolation
console.log(`Hello my Name is ${name} and My age is ${age}`);

const gameName = new String('Pushpendra-thakur')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

// kon sa word he 
console.log(gameName.charAt('8'));

// reverse
console.log(gameName.indexOf('a'));

const newstring = gameName.substring(0,8)
console.log(newstring);

const anotherString = gameName.slice(0,4)
console.log(anotherString);

const newStringOne = "    Pushpendra     "
console.log(newStringOne);
console.log(newStringOne.trim()); // unwanted space ko hatana

const url = "http://pushpendra.com/pushpendra%20rajput"

console.log(url.replace('%20','@')) // replace krna (isko , isse)

console.log(url.includes('rajput')) // check krna 

console.log(gameName.split('-'))  // alag alg krna 