// ye jo criteria ye hum kya soch rhe but jaise hi user aya 
// toh hume uska data store karna hai jaise ki uska email name 
// from which city he belongs to and etc and in programming 
// how is data is been is stored is the most important thing
// for this we are now learning the topic constant and variable.
// *****************Lets GO*************************

// and we are now gonna see how we will call user in our website and 
// how he will give his information to us.


// COnstant ko decalare krne ka tareeka sirf ek hai keyword "Const"
const accountId = 144553
// "const" ka meaning memory ke andr asign kr dia hai humne value and ab is value ko change nhi kra ja skta.
let accountEmail = "aryan.google.com"
/*
Plz dont use var because of issue 
in block scope and functional scope
*/
var accountPassword = "12345"
/*
js is the one of the most safe language it can give us the value of one variable without even 
declare it.
*/
accountCity = "Aligarh"
/*
Now if I get the order to add the term accountState as well
and we know either we have to use const and let to declare it so lets see now 
what happens next
*/
// let accountState;
/*
We can clearly see js gives us the undefined value in side the terminal 
so from here we can assure that we have to always define some value to get to 
the desire result for ex.
let accountState = "Uttar Pradesh"
*/
let accountState = "UP"
// "accountId = 2" from here we can assure that if we have 
// assign a value in const keyword after that we cant change the value of it, 
// it is a fixed value.

accountEmail = "hchc@google.com"
accountPassword = "212121"
accountCity = "Bengaluru"

// to print this whole we have seprately write whole console.log(accountEmail);
// console.log(accountPassword); so here is the short cut for that problem 
// we can use console.table([    ])

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])



