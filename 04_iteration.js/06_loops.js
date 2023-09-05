// const coding = ["js", "ruby", "java", "python", "Cpp"]


//  const value = coding.forEach((item) =>{
//     console.log(item);
//     return item//for each type nothing return 
// })
// console.log(value);
//return value + undefined manualy return item 


// const myNums = [1,2, 3, 4, 5,6, 7,8, 9, 10]

// let newnums= myNums.filter((num) => num > 4)//call back leta hai 
// console.log(newnums);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) =>{
//      return num > 4// you should return becuse that function scope {}
// }) 
// console.log(newNums);//5, 6, 7, 89, 10


// const newNums = []

// myNums.forEach((num) =>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);
const books =[
    {
        title: 'Book one' , genre: 'Fiction', published: 1989, edition: 2010
    },
    {
        title: 'Book TWo', genre: 'Non-Fiction', published:1976, edition:2013
    },
    {
        title: 'Book Three', genre: 'History', published:1999, edition:2021
    },
    {
        title: 'Book four', genre: 'Science', published:1776, edition:2015
    },

];


const userBooks = books.filter((bk) => bk.genre === 'History')

let userBooks2 = books.filter((bk) =>  {return bk.published >= 2000})
console.log(userBooks);