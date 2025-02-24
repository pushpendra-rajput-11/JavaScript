// Arrays

const myArr = [0,1,2,3,4,5,6]
const myHeroes = ["saktiman","Hanuman"]

const myArr2 = new Array(2,1,3,4,5,6)
console.log(myArr[1]);

//Methods Of Arrays

myArr.push(99)
myArr.pop()

myArr.unshift(9)

myArr.shift()
console.log(myArr.concat(myHeroes));
console.log(myArr.join(' @ '));
console.log(myArr.reverse());
console.log(myArr.indexOf(4));

console.log(myArr.slice(2,5));

console.log(myArr.splice(2,5,11));

 console.log(myArr.includes(9));
 console.log(myArr.includes(1)); // includes used for searching element from arrays by given parameters 

// ********** Slice our Splice *************** // 

console.log("A " ,myArr);

const mya1 = myArr.slice(1,3)
console.log(mya1);
console.log("B ",myArr);

const mya2 = myArr.splice(1,3)
console.log(mya2);
console.log("c ",myArr);




