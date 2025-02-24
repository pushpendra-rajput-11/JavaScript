const user = {
    username : "pushpendra",
    price: "999",

    welcomeMessage: function(){
    console.log(`${this.username}, welcome to my websire`); // current context 
    console.log(this);

    }
}
// user.welcomeMessage()
// user.username = "Thakur"
// user.welcomeMessage()

// console.log(this); // this referce to empty 

// function chai (){
//     let userName = "Pushpendra"
//     console.log(this.userName);
// }
// chai()


// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2
    
// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({username: " Pushpendra"})  // object

console.log(addTwo(5,4))

const myArray = [2,3,4,5,6]

myArray.forEach();
