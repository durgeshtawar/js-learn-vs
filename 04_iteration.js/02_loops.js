// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}


const greetings = "Hello ji!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}

//maps object key value pairs 
const map = new Map()

map.set('IN',"india")
map.set('USA', "united state of indi")
map.set('FR', "Frence")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' , value);
    
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'spiderman'
// }
// for (const [key, value] of myObject)//another way to iterate obj  {
//     console.log(key, ':-', value);
    
// }