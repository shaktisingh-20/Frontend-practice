const marvelHeros  = ["Spiderman","Ironman","Vision","Thor"]
const dc_Heroes = ["Superman","batman","flash"]
// marvelHeros.push(dc_Heroes)
// console.log(marvelHeros);


const heroes = marvelHeros.concat(dc_Heroes)
console.log(heroes);

const newHeroes = [...marvelHeros,...dc_Heroes] //same works as concat but spread is generally more used
console.log(newHeroes);


const anotherArray = [1,2,3,[23,23,24,32],23,[23,23,[23,4,6,8,3]]]
const realAnoArray = anotherArray.flat(Infinity)
console.log(realAnoArray);

console.log(Array.isArray("Shakti"));

console.log(Array.from("Shakti"));
console.log(Array.from({name:"Shakti"}));  //interesting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))

