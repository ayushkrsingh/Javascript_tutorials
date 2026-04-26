// Understanding Callbacks----------

// function myfunc(callback) {
//     console.log("Function for task 1")
//     callback();
// }

// myfunc(()=>{
//     console.log("Function for task 2")
// })


function checkNumsThenAdd(num1, num2, onSuccess, onFailure) {
    if(typeof num1 === "number" && typeof num2 === "number"){
        onSuccess(num1, num2);
    } else{
        onFailure();
    }
}

checkNumsThenAdd(6, 5, (num1, num2)=>{
    console.log(num1 + num2);
}, ()=>{
    console.log("Please enter numbers only")
})