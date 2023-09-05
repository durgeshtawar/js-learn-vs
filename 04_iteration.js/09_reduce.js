//reducer .reduce 
const myNums = [1, 2, 3]
//  const mytotal = myNums.reduce(function (acc , currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc  + currval
//  }, 0)

//  console.log(mytotal);

const mytotal = myNums.reduce((acc, curr) => acc + curr, 0)
console.log(mytotal);


const shopingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "data science",
        price : 9999
    },
    {
    itemName : "App devlopment",
    price : 10999
},
];


 const pricetoPay = shopingCart.reduce((acc, item) => acc+item.price , 0)
console.log(pricetoPay);
