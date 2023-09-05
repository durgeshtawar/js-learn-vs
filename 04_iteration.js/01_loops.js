// for 
// for(let i=1; i<=10; i++){
//     console.log(i);
// for

// for(let index = 0; index <= 10; index++){
// const element = index;
// if(element == 5){
//     console.log("5 is best number ");
// }
// console.log(element);
// }

// for(let i=0; i<=10; i++){
//     console.log(`outer loop value: ${i}`);
//     for(let j=0; j<10; j++){
//         console.log(`inner loop value ${j} ans inner loop ${i}`);
//         console.log(i+ '*' + j+ '=' + i*j);
//         //nated loop 

//     }
// }
// let myArray = ["flash", "bnatman ", "superMan"]
// console.log(myArray.length);
// for(let index = 0; index< myArray.length; index++){
//     const element = myArray[index];
//     console.log(element);
// }


// break and continue two types of statment 

// for(let index = 1; index <=20; index++){
//     if(index == 5){
//         console.log(`Deteced 5`);
//         break;//in case 5 then break 
//     }
//     console.log(`value of i is ${index}`);
// }
// for(let index = 1; index <=20; index++){
//     if(index == 5){
//         console.log(`Deteced 5`);
//         continue;//in case 5 then continue 5 - 6-7 skip 5

//     }
//     console.log(`value of i is ${index}`);
// }

//while do-while
let index = 0;
while(index <= 10){
    console.log(`value of index is ${index}`);
    index = index + 2;
}


let myArray = ["flash", "batman", "superman"]

let arr = 0
while(arr < myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr = arr+1
}


let score = 1

do{
    console.log(`socre is ${score}`);
   score++
}while(score <= 10)