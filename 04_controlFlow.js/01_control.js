// if

// const isUserLogedIN = true;
// const tempertutre = 41 
// if(tempertutre < 50){//scop
//     //excute 
//    console.log("les then 50 ");//smotly run 

// }else{
// console.log("tem is greter then 50 ");
// }
// // <, > <= , >= , ==,  != === , !==  

// console.log("excute");

// const score = 200

// if(score > 100){
//     let  power = "fly"
//     console.log(`user poer : ${power}`);//power undifined 
// // }


// const balnced = 1000
// //if(balnced > 500) console.log("test")//,log(test2)//emplicite scop one don't use multiple line using , write multiple line 


// if(balnced  < 500) {
//  console.log("less then 500");
// }
// else if(balnced < 750){
//     console.log("less then 750");
// }
// else if(balnced < 900){
//     console.log("less then 900");
// }else{
//     console.log("less then 1000");
// }

const isUserLogedIN = true 
const debitCard = true 
const isUserLogedINFromgoogle = false 
const isUserLogedINFromEmail = true

if(isUserLogedIN && debitCard && 2==2){
    console.log("Allow to buy course");
}
if(isUserLogedINFromgoogle || isUserLogedINFromEmail){
    console.log("user logged in");
}