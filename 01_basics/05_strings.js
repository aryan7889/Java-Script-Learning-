const name = "hitesh"
const repocount = 50 

// console.log(name + repocount + " Value");
/*but this is outdated method to write 
*/
/* so we have new method to write it by the use of backticks
string intepolation by the use of dollar sign */

console.log(`Hello my name is ${name} and my repocount is ${repocount} `);



/*
NEW METHOD TO DECLARE STRING



*/
const gamename = new String('hitesh-hc')
console.log(gamename[0]);/* Method to access the key of the value pair */

console.log(gamename.__proto__);/* one of the easiest prototype */


console.log(gamename.length);
console.log(gamename.toUpperCase());/* now it doesnt change our 
original value because of the heap memory (non primitive)*/

console.log(gamename.charAt(2));
console.log(gamename.indexOf('t'));


const newString = gamename.substring(0, 4);
console.log(newString);

// have to read documentation on mdn











