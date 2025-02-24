// const tinderUser = new Object() => This is a singleton object

const tinderUser = {} // => this is non - singleton obbjects 

tinderUser.id = "123@abs"
// tinderUser.name = "Pushpa"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "abc@gmail.com",
    fullName :{
        secondNmae:{
            firstName : "Pushpendra",
            lastName : "Rajput"
        }
    }
}

//accessing by . 

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.secondNmae);
// console.log(regularUser);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "Pushpendra@gmail.com",
    },
    {
        id : 1,
        email : "Pushpendra@gmail.com",
    },
]


users[1].email
// console.log(users);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    course: "jsinHindi",
    price: "999",
    courseInstructor: "Pushpendra",
}

// course.courseInstructor

const{courseInstructor : instructor} = course

console.log(instructor);

json

// {
//     "name" : "hitsk",
//     "coursename" : "js in hindi",
//     "price" : "999",

// }

