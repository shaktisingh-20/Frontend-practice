// var c = 100
let a = 300 //global scope
if(true){ // local scope
    let a = 30
    const b = 40
    var c = 50
}
console.log(a);
// console.log(b); ReferenceError: b is not defined
// console.log(c); // out put 50
