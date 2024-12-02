let d = 300
// let a = 3
// let b = 40
if(true) {
    let a = 10
    const b = 20
    var  c = 30
    console.log("inner ", a);
    

}

// console.log(a);
// console.log(b);
console.log(c);

function one (){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
//   console.log(website);
  
    two()
    
    
}
one()


if (true) {
    const username = "hitesh"
    if (username=== "hitesh") {
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// // 44444444444444444444444444444444444444444444444444444444444444444444
console.log(addone(5));
function addone(num) {
    return num + 1
}


console.log(addTwo(5));
const addTwo = function (num) {
    return num + 2
    
}
