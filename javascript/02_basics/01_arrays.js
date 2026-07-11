//array 

const array = [1,2,3,4,5,6,7]
// console.log(array[0]);

const arr1 = ["Shakti", "Gaurav","Ayush","Abhishek"]
// console.log(arr1[2]);

const arr2 = new Array (1,23,"Shakti",45 , "Ritu")
// console.log(arr2[2]);

// console.log(array.push(8));
// console.log(array.push(10));
// console.log(array.pop());

// console.log(array.unshift(32)); // adday values in array from starting (not efficient)
// console.log(array.shift()); // delets values in array from starting
// console.log(array.includes(4));
// console.log(array.indexOf(4));


// const newArray = array.join()
// console.log(array);
// console.log(newArray);
// console.log(typeof newArray);


//slice and splice
//[1,2,3,4,5,6,7]

console.log("A", array);
const anotherArr = array.slice(1,3)
console.log("B",anotherArr);

const another2 = array.splice(1,3)
console.log(array); //[ 1, 5, 6, 7 ] original array manipulated

console.log("C",another2) //[ 2, 3, 4 ]


