// spread operator
// in ARRAYS
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const newArray = [...array1, ...array2];   // both arrays are spread
// const newArray = [..."abc"];   //will spread the string in letters
// const newArray = [..."563489679"];  // numbers cannot be spread
// console.log(newArray);

// IN OBJECTS

const obj1 = {
    key1: "value1",
    key2: "value2",
    // key1: "value221"    // will override the first value of key1, but will print firstly (on the place of key1).
};
const obj2 = {
    key1: "value221",   //this is the final value of key1, and only this will print in newObject if obj1 is spread first
    key4: "value4"
};

// const newObject = {...obj1, ...obj2}; // key1: "value221" 
// const newObject = {...obj2, ...obj1, key32: "value32"}; // key1: "value1" 
// const newObject = {..."abc"};   //keys will be index
const newObject = {...["item1", "item2"]};   //keys will be index
console.log(newObject);

//4:33:23
// doneee





//EXPERIMENT
// getting all values of newArray to onemore array in numerical form.......
// const onemore = [];
// for(let i=0; i<newArray.length; i++){
//     onemore.push(Number(newArray[i]))
// }
// console.log(onemore);
