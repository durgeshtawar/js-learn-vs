const name = "aditya"
const  repcount = 50

//console.log(name+ repcount + "value");//not good 
//use bactics 
console.log(`hello my name is ${name} and my rep0 count is $ {repocount}`);

const gameName = new String('aditya')
///string is object data type
console.log(gameName[0]);//a
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase())//use memory heap 
console.log(gameName.charAt(2));//i
console.log(gameName.indexOf('t'))//4
const newString = gameName.substring(0, 4)//adit trim remain part 
console.log(newString);
const another = gameName.slice(-8, 4)//reverse value 
console.log(another);//in slice we use negative value

const newString1 = "   aditya   "
consol.log(newString1.trim()); // remove space 

const url = "https//adity.com/adity%20chodry"
consol.log(url.replace('%20', '-'));


consol.log(url.includes('ram'));

comsol.log(gameName.split('-'))