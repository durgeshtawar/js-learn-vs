const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8996
console.log(otherNumber.toPrecision(4));

const hunderates = 1000000;
console.log(hunderates.toLocaleString('en-IN'))//,,
// number.max_value

//+++maths bydefult libryri 
console.log(Math);//its object . 
console.log(Math.abs(-4));//4 positive 
console.log(Math.round(4.8))//5
console.log((Math.ceil(4,2)));
console.log(Math.floor(4,9));
//.min .max 

console.log(Math.random())//0 --> 1 value appears 
console.log(Math.random()*10 + 1);// 


const  min = 10 
const max = 20 

console.log(Math.floor(math.random()* (max- min+1))+ min);
