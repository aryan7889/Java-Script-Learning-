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

// ////////////////////////////////////////////////////

// Stack(Primitive), Heap (Non Prinitive)

/*There are two types of memory stack is used for 
primitive and heap memory is used for non primitive 

> WHENEVER WE USE STACK MEMORY WE ALWAYS RECIEVE COPY OF THE VARIABLE 
WE HAVE DECLARED.


*/

// EXAMPLE OF STACK
let myytname = "Hitesh Chaudhary"
let anothername = myytname
anothername = "chai nd code"
console.log(myytname);
console.log(anothername);


let userone = {
     email: "user@gmail.com" ,
     upi: "user@ybl"
}
/*SINCE IT IS OBJECT IT WILL BE GOING INTO HEAP MEMORY 
> AND WE KNOW THAT IN HEAP MEMORY WE DONT RECIEVE 
   COPY OF THE TEXT WE GET THE REFRENCE OF THE 
   ORIGINAL TEXT.

>IF ANY OF THE PRIVITIVE DATATYPES ARE THERE THEN THERE
MEMORY WOULD BE STACK MEMORY AND WE WILL RECEIVE THE 
COPY OF THE TEXT.


*/


// EXAMPLE OF HEAP
let usertwo = userone 
usertwo.email =  "usertwo@google.com"
console.log(userone.email);
console.log(usertwo.email);



/*
and ab hume user two me user one se refrence mile ga.
*/
/*
>NOW WE GET TO KNOW THAT IN HEAP WE ALWAYS GET 
THE REFRENCE OF THE PREVIOUS VARIABLE THAT WE 
HAVE DECLARED.
*/
