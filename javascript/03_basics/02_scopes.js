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
//


function one(){
    const userName = "Shakti"

    function two(){
        const website = "Youtube"
        console.log(userName)
    }
    // console.log(website); //ReferenceError: website is not defined
    
    two()
}
one()
//


if(true){
    const name = "Shakti"

    if(name === "Shakti"){
        const channel = "chaiOrCode"
        console.log(name);
    }
    // console.log(channel) not defined
}

// console.log(name); // not defined


// +++++++++++++++++++++++++++
// mini hoisting

console.log(addOne(2));
function addOne(num){
    return num + 1
}



// console.log(addTwo(1)); will give error
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(1));

