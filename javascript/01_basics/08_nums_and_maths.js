const num = 100
console.log(typeof num);

const anotherNum = new Number(400)

console.log(anotherNum);
console.log(typeof anotherNum);
console.log( anotherNum.toString());
console.log( anotherNum.toString().length);
console.log( anotherNum.toFixed(2)); //decimal values after point (400.00) if(anotherNum.tofixed(1)) (400.0)

const otherNumbers = 132.243
console.log(otherNumbers.toPrecision(4));


const hundresds = 21202438
console.log(hundresds.toLocaleString('en-IN'));

//+++++++++++Math+++++++++

console.log(Math)
console.log(Math.abs(-244));
console.log(Math.round(23.56));
console.log(Math.ceil(2.13));
console.log(Math.floor(2.12))
console.log(Math.min(2,35,56,643,65))
console.log(Math.max(2,35,56,643,65))

console.log(Math.random())
console.log((Math.random()*10)+1)
console.log((Math.floor(Math.random()*10)+1))

const min =10
const max = 20

console.log(Math.floor(Math.random()* (max - min + 1))+min)


