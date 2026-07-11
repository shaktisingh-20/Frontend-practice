// singleton
// Object.create


// object literal
const mysym = Symbol("key1")

const jsUser ={
    name: "Shakti",
    "full Name":"Shakti Singh",
    age:18,
    [mysym]:"key234",
    location:"Bareilly",
    email:"shakti@gmail.com",
    isLoggenIn:false,
    lastLoginDays:["Monday", "Tuesday"]
}
// console.log(jsUser.email);
// console.log(jsUser[mysym]);


// console.log(jsUser["full Name"]);

jsUser.email = "www.shaku.chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "www.ramu@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello how are you");
}
console.log(jsUser);
console.log(jsUser.greeting());

jsUser.greetingtwo = function(){
    console.log(`hello js user ${this.age} years old`);
}
console.log(jsUser.greetingtwo());




