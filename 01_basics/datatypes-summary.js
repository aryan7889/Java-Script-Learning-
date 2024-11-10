/*
datatypes is basically divided into two 
cateogary such as primitive and  non primitive.(refrence type)


Primitive: (7 types)
1.Strings
2.Number
3.Boolean
4.Null
5.Undefined
6.Symbol
7.BigInt (syntific value or very big value)*/

const score = 100
const scorevaalue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
/*
Refrence type (Non Primitive)
These are all those value in which there refrence can
directly allocate to the memory

1.Arrays
2.Objects
3.Functions


JavaScript is dynamically typed language.
*/

const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
name: "Aryan",
age: 18,
    
}
const myfunction = function(){

console.log("Hello world");


}
console.log(typeof myfunction);

/*
DATATYPE of all the non primitive one is always called 
function but for function it is named as object function.

*/