//array 
let myArry = [0, 1, 2, 3, 4, 5];
console.log(myArry[0]);

const myarray2 = new Array(1, 2, 3,4)
//methods
// myArry.push(6)
// console.log(myArry);

// myArry.pop()

myArry.unshift(0)
console.log(myArry);//inser in star its a problematic all vlues are shift 
myArry.shift()//remove un
console.log(myArry.includes(9));
console.log(myArry.indexOf(3));

const newArray = myArry.join();
console.log(myArry);
console.log((newArray));//,, convrt string

//slice , splice
console.log("A", myArry);
//return section of array 
const myn1 = myArry.slice(1, 3)//not include 012
//splice include last part of arry 


//it is a object 
//resizable 
const myArry5 = [0,1,2, 3,4, 5, ture, "aditya"]
 console.log(myArry[0])

 //shllow copy of an object same reference point 
 //deeep copy do not share copy 


 //array metods 
 myarray2.push(6)
 console.log(myarray2);

 //pop remove last value 
 myArry.unshift(0)//add value in satart and sift all vallue in array 


 myArry.shift()
 console.log(myArry);

 console.log(myArry.includes(9))//9 is avaliable or not inarray and result bool
 //indexof(9)
 // join bind and convert the array in string 


 //slice splice 
 console.log("A", myArry);
 const myn3 = myArry.slice(1, 3)
 console.log(myn1);
 console.log("B", myArry);
