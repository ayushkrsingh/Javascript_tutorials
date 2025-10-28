// function expression

// 5:12:00


// There will bw no difference !!!!!!!!!!

// function singAsong(){        //#### FUNCTION DECLARATION
//     console.log("Happy Badday to YOUUU !!!!!!!");
// }
const singAsong = function(){   //#### FUNCTION EXPRESSION
    console.log("Happy Badday to YOUUU !!!!!!!");
}
singAsong();


// function sumTHREEnums(num1, num2, num3){
//     return num1+num2+num3;
// }
const sumTHREEnums = function(num1, num2, num3){
    return num1+num2+num3;
}
console.log(sumTHREEnums(2, 54, 4));



// function isEven(yourNUM){
//     return yourNUM % 2 === 0;
// }
const isEven = function(yourNUM) {
    return yourNUM % 2 === 0;
}
console.log(isEven(23));



// function giveFirstChar(yourString){
//     return yourString[0];
// }
const giveFirstChar = function(yourString){
    return yourString[0];
}
console.log(giveFirstChar("TomBhai"));



// function findtarget(MyArray, MyTarget){
//     for (let i=0; i<MyArray.length; i++) {
//         if (MyArray[i] === MyTarget) {
//             return i;
//         }
//     }
//     return false;
// }
const findtarget = function(MyArray, MyTarget){
    for (let i=0; i<MyArray.length; i++) {
        if (MyArray[i] === MyTarget) {
            return i+1;
        }
    }
    return false;
}
console.log(findtarget([23,2, 5, 7, 19, 45], 5));
