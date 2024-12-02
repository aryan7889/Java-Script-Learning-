const user = {

username: "hitesh",
price: 999,

welcomemessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
    
}
    
}
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this); node vs chrome

// function chao(){
    
//     console.log(this);
    
// }
// chao()

const chai = () =>{
    let username = "hitesh"
    console.log(this);
    
}

// chai()

// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }

// const addTwo = (num1, num2)=>(num1 + num2)



console.log(addTwo(3, 4));
