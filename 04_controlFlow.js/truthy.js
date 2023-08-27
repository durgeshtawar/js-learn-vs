const UserEmail = "h@aadi.ai"//suppose its true ""-->false
if(UserEmail){
    console.log("GOt user email");

}else{
    console.log("Dont have user email");
}

//falsy values
//false, 0 , -0,  BigInt 0n , "", null, undifined , NAN
//truthy 
true , 1, [], "0", 'false' , " ", {}, functin(){} 
if(UserEmail.length ==0){
    console.log("aray is empty");
}
const obj {}
  
if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");

}
//nullish coalescing operatoe (??): null undefined

let val1;
val1 = 5 ?? 10
val1 =  null ?? 10//10 check safty 
val1 = undefined ?? 15 //15 
val1 = null?? 10 ?? 20 //10


console.log(val1);
//terniary operator
//consdition  ? true : false


const iceteaPrice = 100

iceteaPrice >= 80 ? console.log("less then 80"): console.log("more then 80")