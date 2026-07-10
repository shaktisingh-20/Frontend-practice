const myDate = new Date()
console.log(myDate); // 2026-07-10T13:40:02.161Z

console.log(myDate.toString()); // Fri Jul 10 2026 19:10:02 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Fri Jul 10 2026
console.log(myDate.toJSON()); //2026-07-10T13:40:02.161Z
console.log(myDate.toLocaleDateString()); // 7/10/2026
console.log(myDate.toLocaleString()); // 7/10/2026, 7:10:02 PM
console.log(myDate.toLocaleTimeString()); // 7:10:02 PM
console.log(typeof myDate);


const newDate = new Date(2026, 0, 12) // months starts with 0
console.log(newDate.toDateString()); // Mon Jan 12 2026

let createDate = new Date("01-12-2004")
console.log(createDate.toLocaleString());
console.log(createDate.getTime());

let myTimeStamp = new Date()
console.log(myTimeStamp.getTime());


// 


console.log(Math.floor(Date.now()/1000));


let anotherDate = new Date();
anotherDate.toLocaleString('default',{
    weekday:"long"
})
console.log(anotherDate.toLocaleString('default', { weekday: "long" }));



