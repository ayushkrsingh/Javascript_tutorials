// function expression

// 5:12:00







function singAsong(){
    console.log("Happy Badday to YOUUU !!!!!!!");
}


function threePLUSnine(){
    return 3+9;
}


function sumTWOnums(num1, num2){
    return num1+num2;
}


function sumTHREEnums(num1, num2, num3){
    return num1+num2+num3;
}


function isEven(yourNUM){
    return yourNUM % 2 === 0;
}


function giveFirstChar(yourString){
    return yourString[0];
}


function findtarget(MyArray, MyTarget){
    for (let i=0; i<MyArray.length; i++) {
        if (MyArray[i] === MyTarget) {
            return i;
        }
    }
    return false;
}