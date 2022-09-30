// 8:29

// clone using Object.assign

const obj1 = {
    key1: "value1",
    key2: "value2",
}

// const obj2 = obj1;      ///  but it will not make another variable that separately store the key value pairs of obj1...
// soo, by spread operator--
// const obj2 = {...obj1};     // now it will spread the content of obj1 into obj2
// or, by Object.assign ---
const obj2 = Object.assign({}, obj1);

obj1.key3 = "value3";   
console.log(obj1);
console.log(obj2);