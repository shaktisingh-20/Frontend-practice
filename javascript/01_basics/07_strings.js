const name  = "Shakti"
const count = 50
console.log(typeof(name))

console.log(`My name is ${name} and my count is ${count} thankyou`)

const newName = new String ("Monkey")
console.log(typeof(newName))
console.log(newName[5]);
console.log(newName.__proto__);

;



console.log(newName.toUpperCase())
console.log(newName.charAt(2))
console.log(newName.indexOf('D'))

const anotherName = newName.substring(0,4)
console.log(anotherName);

const newString = newName.slice(-5)
console.log(newString);

const anotherString = "    Shakti    "
console.log(anotherString);
console.log(anotherString.trim());

const url ="https://shakti.com/shakti%20singh"

console.log(url.replace('%20', '-'))
console.log(url.includes('shakti'))




