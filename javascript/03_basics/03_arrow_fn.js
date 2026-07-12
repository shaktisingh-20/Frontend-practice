const users = {
    name:"Shakti",
    price:344,
    message:function (){
        console.log(`${this.name}, welcome to the page`);
        console.log(this);
//         Shakti, welcome to the page
//              { name: 'Shakti', price: 344, message: [Function: message] }
//         Ritu, welcome to the page
//              { name: 'Ritu', price: 344, message: [Function: message] }
    }
}

// users.message()
// users.name = "Ritu" //current context
// users.message()

console.log(this) /* => {} because we are in node environment if we do this on browser we will get windows as winows is a global object in browser*/

//

// function chai(){
//     const userName = "Shakti"
//     // console.log(this); 
//     console.log(this.userName); // WILL NJOT WORK THIS ONLY WORKS WITH OBJECT => undefined
// }

// function chai(){
//     const userName = "Ritu"
//     console.log(this.userName); //=> undefined
// }


// arrow function mostly used because of the behaviour of this.
const chai = () => {
    let userName = "Shakti"
    console.log(this); // => {}
    console.log(this.userName); // => {}
    
}
chai()

// simple arrow function
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwo(23,1));

// Implicit Return
// const addTwo = (num1 , num2) => num1 + num2
// console.log(addTwo(23,1))

// const addTwo = (num1 , num2) => (num1 + num2) // same as above just added brackets

const name = (num1, num2) => ({username:"Shakti"})
console.log(name(2,4))