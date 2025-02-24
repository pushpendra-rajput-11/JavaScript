// functions => In JS , functions are the first class citizens 

let a = function greet(){
    console.log("hii there");
}
function sqr(x){
    console.log(x*x);
}
sqr(8);

function sqr(x){
    return x*x
}
// console.log(sqr(9));

// function addTwoNumbers (number1,number2){  //Parameters
//     console.log(number1+number2);
// }

// function addTwoNumbers (number1,number2){  //Parameters
//     let result = number1 + number2;
//     return result
// }

function addTwoNumbers (number1,number2){  //Parameters
    return number1+number2;
}

const result = addTwoNumbers(3,4) // arguments
// console.log("result : ",result);


function loginUserMessage(userName = "pushpendra"){
    if(userName === undefined){
        console.log("Please enter Username");

    }
    return  `${userName} just logged in`
}
// console.log(loginUserMessage("Pushpendra"))
// console.log(loginUserMessage("Thakur"))

function CaluculateCartPrice(...num1){ // rest operator 
     return num1
}

//  console.log(CaluculateCartPrice(200,400,500,400,800));

const user = {
    username: "pushpendra",
    price: "999",
}

function handleObjects(anyObject){
    console.log(`userName is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObjects(user)

handleObjects({
    username:"Thakur",
    price: "3999"
})

const myNewArrays = [200,400,500,600]
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArrays))