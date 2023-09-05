//primitive  data types  7 

/*
string number boolean , null, undifined symbol Big int 
const score = 100
const scorevalue = 100.3 int 

const id = Symbol('123)
const anotherid = Symbo('123) //diffrent value 
const bigNumber = 34355465664//big int 


const islogedin = false;bool
const outside = null 
letuserEmai; undifined

// REference type or non primitive
Arrays objects Functions 
const heros = {"shakti", "naagrj", "doga"};
let myObj = {
    name : "Hitesh",
    age: 22, 

}
*/

const myFunction= function(){
    console.log("Hello , world");

}
console.log(typeof myFunction);//check data types non primitive data type is object all non primitive 
//ecma 
// memory two types 
//stack heap 
//stack(primitive) decler vlue copy
// Heap (non - primitive) value refernce 

let myytName = "Think well";

let anotherName = myytName
anotherName = "challeng"
console.log(myytName);//old value
console.log(anotherName);//new value
let user= {
    email: "user@7t66gamil.com",
    upi:"ybl@87"

}
let usertow = user//copy user 
console.log(user);
console.log(usertow)
//both are print same output

