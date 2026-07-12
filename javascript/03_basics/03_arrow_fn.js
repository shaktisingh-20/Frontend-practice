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