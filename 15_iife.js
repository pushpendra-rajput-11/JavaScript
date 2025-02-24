// iife = immediately Invoke Function Expression (IIFE)

// function chai(){
//     console.log(`Pushpendra Thakur`);
// }
// chai()

(function chai(){
    // named iife
    console.log(`Pushpendra Thakur`);
}
)();  // global scope ke polution se problem hoti he kai baar use polution ko hatane ke liye use karte he iife

//unnamed iife
((name)=>{
    console.log(`Pushpendra Thakur two ${name}`);
})("PUSHPENDRA")

