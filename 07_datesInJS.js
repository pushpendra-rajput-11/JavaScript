// Dates

let myDates  = new Date()
// console.log(myDates); // 2023-12-31T06:35:56.775Z
// console.log(myDates.toString()) // Sun Dec 31 2023 12:05:56 GMT+0530 (India Standard Time)
// console.log(myDates.toDateString()) //  Sun Dec 31 2023
// console.log(myDates.toISOString()) // 2023-12-31T06:35:56.775Z
// console.log(myDates.toJSON()) // 2023-12-31T06:35:56.775Z
// console.log(myDates.toLocaleString()) // 31/12/2023, 12:05:56 pm
// console.log(myDates.toTimeString()) // 12:05:56 GMT+0530 (India Standard Time)

console.log(typeof myDates)

// let myCreateDates = new Date(2023,11,31)
// let myCreateDates = new Date(2023,11,31,5 ,3)
let myCreateDates = new Date("01-01-2024")
console.log(myCreateDates);
// console.log(myCreateDates.toDateString());
// console.log(myCreateDates.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDates.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(`${newDate.getMonth()} and the time is `);

newDate.toLocaleString('default',{
    weekday:"long",
})