const marval_heroes = ["thor","Ironman","spiderman"]
const dc_heroes = ["superman","flsh","batman"]

// smarval_heroes.push(dc_heroes)
// console.log(marval_heroes);

const allHeroes = marval_heroes.concat(dc_heroes)
//  console.log(allHeroes);

 const allNewHeroes = [...marval_heroes,...dc_heroes]
 // console.log(allNewHeroes);

 const anotherArray = [1,2,3,[4,5,6],[7,[8,[9]]]];
 const real_another_array = anotherArray.flat(Infinity)

 // console.log(real_another_array);


 console.log(Array.isArray("Pushpendra"));
 console.log(Array.from("Pushpendra"));
 console.log(Array.from({name:"Pushpendra"})); // interesting

 let score = 100;
 let score2 = 200;
 let score3 = 300;

 console.log(Array.of(score,score2,score3))