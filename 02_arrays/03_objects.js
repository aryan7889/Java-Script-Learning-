/*
object ko declare krne ke do tareeke hote hai constructor ki tarah and
literals ki tarah.*/



/*singleton:
koi bhi constructor se aap sabh bhi object banate hai toh ek singleton banta
hai yaani singleton apne tareeke ka ek hi object hai.
*/
/*
lekin jab hum dusre tareeke se banate hai toh tub multiple instance ban jate hai.
and jab bhi literals ki tarah declare krte hai toh singleton nhi banta hai.
*/

// object literals :::::::::::::::::
 
// AND the curly braces we can see is only what we call as object.

const mySym = Symbol("key1");

const JsUser = {
    name: "Hitesh",
    "fullname": "Hiteh Chaudhary",
    [mySym]: "myKey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"] 
 }

//  How to acces object :
console.log(JsUser.email);



// console.log(JsUser[email]); we cant write it like this because it not defined 
// as it is stored in object as string.


// here is the correct methodd with the write syntax.
console.log(JsUser["email"]);
console.log(JsUser["fullname"]);
console.log(JsUser[mySym]);


JsUser.email = "Hiteh@chat.com"
Object.freeze(JsUser)
JsUser.email = "hitesh@micro.com"
Object.freeze(JsUser)

// console.log(JsUser);


 