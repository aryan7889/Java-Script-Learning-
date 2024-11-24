// const tinderUser = new Object()
// console.log(tinderUser);
/*from here we can get to know that here we will be getting 
only the empty object*/

const tinderUser = {}
// console.log(tinderUser);
/*it is also showing the same thing that object is also showing
so here we can see that object can be empty as well.*/


/*now we are adding value to the object*/
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
   email: "same/2gmail.com",/*here we get to know that object is also 
                              works on same concept as arrays do 
                              we can get into more and more nesting and can access
                              every value by using the below syntax.*/
   fullname: {
    userfullname: {
        firstname: "hitesh",
        lastname: "chaudhary"}
   }




}

console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.firstname);

