// default Parameters

// function addTwo(a, b){
//     if (typeof b === "undefined") {
//         b = 0;
//     }
//     return a+b;
// }

// $$$$$$$$$$$    Easy Method    $$$$$$$$$$$
function addTwo(a, b=0){
    return a+b;
}

// const ans = addTwo(7, 6);        // 13
const ans = addTwo(7);          // 7 because b=0
// const ans = addTwo();          // NaN because a=undefined and b=0
console.log(ans);