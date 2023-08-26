//let var const 

//{}  //its a scop 
//var c = 300
//in case whats going //scop functionality 
//avoid the var data type  // and its globle scop 
let a = 300//always 300 a conatiune a data 


if(true){
    let a = 10
    const b = 20
   // var c = 30
   console.log("iiner" , a);//ineer 10 , outer 300
}
// for(let i=0; i< Array.length(); i++){
//     const element = array[i];
// }

//console.log(a);//a is not defined 
//console.log(b);//b is not print
//console.log(c);//its print why  

function one(){
    const userName = "aditya"
    function two(){
        const webSite = "youtube"
        console.log(userName);
    }
    console.log(webSite);//error
    two()//aditya
}
one() //aditya website 
if(true){
    const userName = "aditya"
    if(userName == "aditya"){
        const website = "youtube"
     console.log((userName + website));
    }
    console.log(website);//eroor out of the scop 
}
console.log(userName);//error  

//******interesting */
console.log(addONe);
function addONe(val){
    return num + 1
}
addTwo(5)//in case error using huestick 
 //addONe(5)//anothr way
 const addTwo = function(num){//called as a expresion 
    return num + 2//error in sitution consept explorer huwstcik
    //before not declere obj function ... fun first prority 

 }
//  addTwo(5)