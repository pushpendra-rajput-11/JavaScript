const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherValue = 123.9165
console.log(otherValue.toPrecision(3)); // for presice value 

const hundreds = 100000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));


// ******************************** MATHS *************************************

console.log(Math)
console.log(Math.abs(-5)); // minus ko plus me convert krta h 
console.log(Math.round(4.9245)); // value lo round fo krta he 
console.log(Math.ceil(4.12)); // thoda sa bhi jyda ho to round of krdeta h 
console.log(Math.floor(4.96)) // lowest value leat h 
console.log(Math.min(1,4,5,6,7,8,1,0,10));
console.log(Math.max(1,2,4,5,7,5,2,10));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min)
