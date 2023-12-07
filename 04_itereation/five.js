const coding = ["js", "ruby", "python", "java"];

// coding.forEach(element => {
//     console.log(element);
// });

// coding.forEach(function (item){console.log(item);});

// coding.forEach((item)=> console.log(item));

// function printme(item){
//     console.log(item);
// }
// config.forEach(printme)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding = [
  { languageName: "javascript", languageFileName: "Js" },
  { languageName: "javascript", languageFileName: "Js" },
  { languageName: "javascript", languageFileName: "Js" },
  { languageName: "javascript", languageFileName: "Js" },
  { languageName: "javascript", languageFileName: "Js" },
];

myCoding.forEach((item)=>{
    console.log(`${item.languageName} and file name is : ${item.languageFileName}`);
})