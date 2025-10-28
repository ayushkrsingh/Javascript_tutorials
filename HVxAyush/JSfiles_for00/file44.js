// ###################   FUNCTIONS   ######################

function singAsong(){
    console.log("Happy Badday to YOUUU !!!!!!!");
}
singAsong();

function threePLUSnine(){
    // console.log(3+9);    //no need to console.log when calling
    return 3+9;     // will have to use console.log while calling
}
// threePLUSnine();     //if i had printed that before

console.log(threePLUSnine());   //when i have returned in func
// OR
// const returnedValue = threePLUSnine();
// console.log(returnedValue);


// One step forward
function sumTWOnums(num1, num2){    // num1, num2 are parameters
    return num1+num2;
}
// console.log(sumTWOnums(4,63));  // 4 and 63 are arguments



// one more function
function sumTHREEnums(num1, num2, num3){
    return num1+num2+num3;
}
console.log(sumTHREEnums(3,54,4));



//isEven function
// input me 1 number lega
// output me true or false
//

// function isEven(yourNUM){
//     if (yourNUM%2 === 0) {
//         return true;
//     }
//     return false;
// }

// OR SIMPLY

function isEven(yourNUM){
    return yourNUM % 2 === 0;
}
console.log(isEven(442));   // I did IT !!!!



// One More
function giveFirstChar(yourString){
    return yourString[0];
}
// console.log(giveFirstChar("Ayush"));




// One More
function findtarget(MyArray, MyTarget){
    for (let i=0; i<MyArray.length; i++) {
        if (MyArray[i] === MyTarget) {
            return i+1;   // returns the place (1st, 2nd 3rd 4th etc) of MyTarget in MyArray, here 3 is on the 5th place so >> return (index of array for 3  plus1) which gives the location on 3 in MyArray which is 5th place... 
        }
    }
    return "Not found in MyArray";
}
const array1 = [4,9,46,"Ayush",3,0];
console.log(findtarget(array1,3));