const user = {
    userName: "aditya",
    price: 999,

    welcomeMessage: function() {
console.log(`${this.userName}, welcome to website`);//this current context refer : all variable accsess
    }

}
// user.welcomeMessage//defult value 
// user.userName = "sam"
// user.welcomeMessage()//value  change
//contaxt value kiske bare me baat ho rahi hai 

//console.log(this);//in case {} return becuse we are in node envirment 
//brower ker andar golbal object window obj hai



// function chai(){
//     let  userName = "aditya"
//     console.log(this.userName);//in case return undifined its fun thise run on object 
// }
// chai()//multiple value return in function call this 


// const chai = function(){
//     let userName = "aditya"
//     console.log(this.userName);//in case return undefined so lets try to arrow function 
// }


const chai = () =>{
    let userName = "aditya"
    console.log(this.userName);//in case return undefined 
   console.log(this);
   //return {}

}
//chai()



// () =>{}//arrow function basic
// const addTwo = (num1, num2) =>{//{return keyword likhna padega } explite arrow function
//     return num1 + num2
// }
// console.log((addTwo(3, 4));

//const addTwo = (num1, num2) =>   num1 + num2//() likhe to return ka use nahi ohga 
const addTwo =  (num1, num2) => ({userName: "aditya"})//in obj use ({}) 
console.log(addTwo(3, 4));//implicite arrow function 


