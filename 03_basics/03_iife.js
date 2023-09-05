//immediately invoke function expressions (IIFE)
//write any function and invoke immediately 


// function chai(){
//     console.log(`Db CONNECTED`);
// }
// chai()//not a problem connected db imi but palute golbal varibale 



(function chai(){
    //named iifi
    console.log(`DB CONNECTED`);
})();//run smotly golbal varibale se palution hoti hai kai baar isko avoid karne ke liye 
//; column important for brak the function 

( (name) => {
    //unnamed iifi
    console.log(`DB connected2 ${name}`);
})('aditya')