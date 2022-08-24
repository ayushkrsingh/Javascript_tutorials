// rest parameters

// function myfunc(a, b, ...c){    // rest value will be stored in c as an array
//     console.log("A is ", a);
//     console.log("B is ", b);
//     console.log("C is ", c);
// }
// myfunc(3, 4, 5, 6, 7, 8, 9);


// Work given by HV
const addall = (...a) => {
    let total = 0;
    for(let i = 0; i<a.length; i++){
        total = total + a[i]
    }
    return total;
}

console.log(addall(1,2,3,4,5,6,7,8,9,10));  //..I did it!
