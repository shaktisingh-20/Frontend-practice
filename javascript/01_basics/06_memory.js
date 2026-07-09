// Stack (Primitive) and Heap (Non-Primmitive)

let name = "Shakti"

let anotherName = name
anotherName = "Pandu"
console.log(name)
console.log(anotherName)



//

let details ={
    name:"Shakti",
    age:21,
    grade:'A'
}

let details2 = details
details2.age = 30

console.log(details.age);
console.log(details2.age);

