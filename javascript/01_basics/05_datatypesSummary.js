// Primitve
//call by value
//7 types : String, Number, Boolean, null, undefined, BigInt, Symbol
const marks = 100
const ScoreVlaue = 100.3
const name = "Shakti"
const isLoggedIn = false
const OutsideTemp = null
let userEmail;
const bigNumber = 2424564333278654545786n
console.log(typeof bigNumber);


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


//JavaScript is Dynamically typed language
const score = 100

//Non-Primitive
//Reference type

//Array, Objects, Functions

const heros = ["shaktimaan", "nagraaj", "doga"]
const info ={
    name:"Shakti",
    age:21,
    grade:"A"
}


const myFunction = function() {
    console.log("hello");
    
}
console.log( typeof myFunction);


// typeof null = object
//function t

console.log(typeof([1,2,3]))