let hat = "342"
let score = "3eff3a"
let nonumber = null
let undefcheck = undefined

console.log(typeof(score))

let numberInValue = Number (score)
console.log(typeof(numberInValue))
console.log(numberInValue);

let numberInhat = Number (hat)
console.log(typeof(numberInhat))
console.log(numberInhat);

let nullchecker = Number (nonumber)
console.log(typeof(nullchecker))
console.log(nullchecker);


let undef = Number (undefcheck)
console.log(typeof(undef))
console.log(undef);

// 33 = Number => 33
// "33adc" = Number => Nan
// 1 = Boolean => true
// 0 = Boolean => false

let booleanLogged = "Shakti"

let booleanIsLogged = Boolean(booleanLogged)
console.log(booleanIsLogged)

// "" = Boolean => false
// "Shakti"= Boolean => true

let str = 33
let strToInt = String (str)
console.log(typeof(strToInt));
console.log(strToInt);


