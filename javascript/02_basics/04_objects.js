// const tinder = new Object(); singleton object


const tinderUser = {}

tinderUser.name="Shakti Singh"
tinderUser.id ="123abc"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email:"www.xyz@gmail.com",
    fullname:{
        userFullName:{
            firstName:"Shakti",
            lastName:"Singh"
        }
    }
}
console.log(regularUser.fullname.userFullName.firstName);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4);

const obj5 = {...obj1,...obj2,...obj3}
console.log(obj5);

//structure in database mongo
const users = [
    {
        id:1,
        email:"www.xyz@gmail.com",
    },
    {
        id:2,
        email:"www.xyz@gmail.com",
    },
    {
        id:3,
        email:"www.xyz@gmail.com",
    },
]
console.log(users[1].email);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.hasOwnProperty('isLoggedIn'));

