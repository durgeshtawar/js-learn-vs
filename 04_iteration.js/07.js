const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) =>  num + 10)//its call back function
const newNums = myNumbers
.map((num) =>  num *10) 
.map((num) => num +1)//11 21 //filter multiple method 
.filter((num) => num >= 40)
//41 
console.log(newNums);