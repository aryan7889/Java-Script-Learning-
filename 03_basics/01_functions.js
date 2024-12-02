// functions
/*
functions : ek simple sa tareeka hai ki jo bhi apne cofde likha hai 
10 line ka 20 line usko apne package mei band kr diya hai and voh package 
ap jaha bhi chaiye vaha le ja skte hai and apka kaam ho jaye ga 

*/


function sayMyname (){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("s");
}

sayMyname()/*this will display or execute the function */

sayMyname /* this will not display or excecute any thing because
             parenthesis are not present "(   )" which helps functions
             to execute. 
             */

// function addTwoNumbers (number1, number2) /*the entry inside parenthesis 
//                                             these are parameters*/
// {
//     console.log(number1 + number2)
// }
/*addTwoNumbers(3, null)  the entries inside parenthesis 
                    which we need to exxcecute are called arguments*/

// suppose if anyone have not given number in the argument else he had given 
// like this {addTwoNumbers(3, "4")}, then the output would be 34.


function addTwoNumbers(number1, number2){
let result = number1 + number2
return result
console.log("hitesh");/*by the definition of the fi=unction we should known
                        that after returning the value none of the 
                        below code will execute.*/

}

const result = addTwoNumbers(3, 5)
console.log("Result ", result);















function JustLoggedIn(username = "sam"){
     return `${username} just logged in .`

}
// console.log(JustLoggedIn("hitesh"));


function calculateCartPrice(val1,val2, ...number1 ){
    return number1

}

// console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
}
)


const myNewArray = [200, 400, 300, 600]

function returnSecondValue(getArray) {
    return getArray[1]
    
}

console.log(returnSecondValue(myNewArray));


















