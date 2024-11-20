
const myArr = [0, 1, 2, 3, 4, 5]
/*Array is some what storing a collection of multiple items under a single 
variables name as we have doen in orevious line , and has members
for performing common tasks*/

console.log(myArr[0]);/*access karena ka tarika array me aise hi hota hai and value start hoti hai
                        zero se, ye array ka feature hai */

const myHeros = ["shaktiman", "nagraj"]/*there are multiple ways to declare arrya*/

const myArr2 = new Array(1, 2, 3, 4)/*one more way to add arrya by the use of keyward*/

// Array methods 

myArr.push(8)        /*This is the method to push a value or a object inside
                       array so here output will be 0 1 2 3 4 5 and finally the value 
                       which we have just push which is 8*/
myArr.push(7)               

myArr.pop()         /*this will help us to remove last value from the 
                      array*/

myArr.unshift(9)    /*this will hepl us to push new value which is
                    "9" and it will show us the value in the very 
                    begning of the array which is "0" value.*/

myArr.shift()       /*help us to remove the value that we have pushed
                      in the array or the zeroth value in the original array
                       with the help of unshift function*/

console.log(myArr.includes(9));/*here we are trying to ask a question 
from java script and it will tell us by giving the boolean value
terms of true and false.
                                

*/

console.log(myArr.indexOf(6));/*shows the location of the value inside the 
                                array if it is available in the array but if it is
                                not available in the array then it will give us -1 as 
                                the output*/
console.log(myArr.indexOf(5));



const newArr = myArr.join()/*A string used to separate one element of the 
                             array from the next in the resulting string. 
                            If omitted, the array elements are separated with a comma.*/


console.log(myArr); 
console.log(newArr); 


// Slice and Splice 


console.log("A", myArr);

const myn1 = myArr.slice(1, 3)/*Give us the value from 2nd value of the 
                               array to the value just before the mentioned 
                               value here it is till the 4 position but it will 
                               give till the third value*/
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3)/*Give us the value from the array
                                by removing the constraint position mentioned
                                in the function like here we can see that it is 
                                mentioned from 2nd value of the array give till the 
                                fourth position of the array unlike the slice where it only
                                give back (n-1) position*/
console.log("c", myn2);






