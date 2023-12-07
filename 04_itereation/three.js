// // for of

// ["","",""]
// [{},{},{}]

// const arr = [1,2,3,4,5]

// for (const element of arr) {
//     console.log(element);
// }

// for (const element in arr) {
//     console.log(element);
// }

// const greetings = "Hellow world!"

// for (const gree of greetings) {
//     console.log(`Each chrater is : ${gree}`);
// }

// Maps

const map = new Map()
map.clear();

map.set('IN',"India")
map.set('USA',"United States")
map.set('Fr',"France")
map.set('IN',"India")

console.log(map);

for (const [key,value] of map) {
    console.log(`Key is : ${key} & value is : ${value}`);
}