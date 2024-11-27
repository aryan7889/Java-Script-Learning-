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
                                               /*here is the example of the syntax to access the nested object.*/
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

console.log(regularUser.fullname?.userfullname.firstname); /* OPCTIONAL CHAIN: =>
                      Agr hume pta nhi hai fullname object mei hei he nhi toh hum ise use kr skte hai api calling 
                      ke time mei.*/

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { bj1, obj2 }
            //     or 
/*const obj3 = Object.assign({}, obj1, obj2, obj4)this syntax is generally 
                                           used as a good syntax over the first one 
                                           as here open parenthesis is the new empty object which will 
                                           get all the value of the object that we want to and this is called source.*/
// console.log(obj3);
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


const users = [
{
   id: 1,
   email: "h@gmail.com",

},
{
   id: 1,
   email: "h@gmail.com",
   
},
{
   id: 1,
   email: "h@gmail.com",
   
},
{
   id: 1,
   email: "h@gmail.com",
   
},
{
   id: 1,
   email: "h@gmail.com",
   
}
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

















