const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by apple",
};

// for in ae object ne interate karva mate use thay che
for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py"]

for (const key in programming)   {
   console.log(key);
}
// for in ma key return thashe and forof whole array element

// map is not iteratable so for in not applicable on that