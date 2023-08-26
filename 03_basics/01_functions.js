// console.log("h");
// console.log("i");
// console.log("j");
// console.log("k");
// console.log("l");


///block of code 


function saymyName(){
    console.log("h");
console.log("i");
console.log("j");
console.log("k");
console.log("l");

}
//caaling
//saymyName()//refernce + excute 

// function aadTwoNumbers(number1, number2){

//    console.log(number1 + number2);

// }
function aadTwoNumbers(number1, number2){
// let result = number1 + number2
// return result 
return number1 + number2//2nd way
   // console.log("hitesh");//nnot excute because after return stateemnt noting excute
 
 }
 const result = aadTwoNumbers(3, 4)
// console.log("result: ", result)//give output ans a undefind 

 function logedInUserMessage(userName){// another way (!userName){log}
    if(userName === undefined){
        console.log("pleas enter a user name");
        return //nothing excute after retur


    }
    return `${userName} just loged IN`

 }
 console.log (logedInUserMessage("aditya"));
 console.log (logedInUserMessage(""));//in case just loged in print
 console.log (logedInUserMessage());//no value in case undefined just loged in print ****

function calculateCartPrice(...num1){//calcu(val1, val2, ...num1)//in case only print 500 2000 starting first two value are denide 
    return num1

}
 console.log(calculateCartPrice(200, 400, 500, 2000))//in case use the rest oprater ... array is output 


 const user ={
    userName:"aadi",
    price: 199
 }
 function handleObject(anyobject){
    console.log(`user name is ${anyobject.userNmae} ans price is${anyobject.price}`);

 }
 //handleObject(user)ha

 handleObject({
    userName: "ssam",
    price: 399
 })
 const myNewArray = [200, 400, 500, 600]
 function returnsecondValue(getarray){
    return getarray[1]
 }
//  console.log(returnsecondValue(myNewArray))
console.log((returnsecondValue([200, 400, 500, 1000])));