function addTwoNumbers(num1, num2) {
    // console.log(num1+num2)
}
addTwoNumbers(2,3)

// const sum = addTwoNumbers(2,5)
// console.log(sum); // undefined because we havent added return statement yet 

function addNumbers(num1, num2) {
    // let num3 = (num1+num2)
    return num1 + num2 // another way 
    console.log("shakti"); // this will never print as after return the code in unreachable
}
const sum = addNumbers(2,5)
// console.log("result:=> ",sum);


function userLoginMessage(message){
    if(!message ){
        console.log("Please enter a name")
        return
    }
    return `${message} just logged in`
}
console.log(userLoginMessage())

function userMessage(message = "sam"){
    if(!message ){
        console.log("Please enter a name")
        return
    }
    return `${message} said hello hyow are you`
}
console.log(userMessage())

function calculateCartPrice(...num){// rest and spread syntax is same but depends on the use case
    return num
}
console.log(calculateCartPrice(200,451,623,65,343));

function addCartPrice(val1, val2, ...num){
    return num
}
console.log(addCartPrice(234,456,24,521,234))

//

const user = {
    name:"Shakti",
    age:21
}

function handleObject(anyObject){
    return `This is ${anyObject.name} and he is ${anyObject.age} years old`
}

console.log(handleObject(user))
// console.log(handleObject({
//     name:"Shakti",
//     age:22
// }))

const myNewArray = [100,200,300,400,500]

function returnSecondElement(arr){
    return arr[1]
}
console.log(returnSecondElement(myNewArray))
console.log(returnSecondElement([200,300,400,500,600]))


console.log(b)
var b = 5

var a = 100
function change(){
    var a = 200
    console.log(a)
}
change()
console.log(a) 