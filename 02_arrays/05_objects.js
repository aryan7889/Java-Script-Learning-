// destructure of objects 
/*objects ka discussion furture jake banta hai api ke discussion par*/

const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "hitesh chaudhary"
}
/* 
Whenever we have to use these values we have to the basic steps that we use to 
do simple write the syntaax as follows:

[course.courseinstructor]

but when we have to make our code clean then we have to do 
simple syntax changes.

*/

const {courseinstructor: instructor} = course
console.log(instructor);

/*
same way we can also do de structuring of aarrays*/

[
{},
{},
{}
]