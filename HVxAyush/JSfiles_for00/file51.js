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

const ans = addTwo(3);
console.log(ans);