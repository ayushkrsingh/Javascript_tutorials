//// Promises----------

console.log("Script Starts!");

const bucket = ["chips", "banana", "rice", "salt"];

const makeFriedRice = new Promise((resolve, reject) => {
    if (bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("Fried Rice Ready !!");
    } else {
        // reject("Could'nt make Fried Rice");
        // or  --- (basically we can pass anything)
        // lets pass an error object
        reject(new Error("Something missing from bucket"));
    }
});

//-------- consume ---------

makeFriedRice.then(
    //when promise resolve
    (myFriedRice) => {
        console.log(myFriedRice);
    }, 
    // when promise reject 
    ).catch(
    (error) => {
        console.log(error)
    }
);

setTimeout(() => {
    console.log("setTimeout Runs!!")
}, 0);

console.log("Script Ends!");


// in output: 
// Script Starts!
// Script Ends!
// Error: Something missing from bucket
// setTimeout Runs!!

// because promise goes in microtask queue and setTimeout goes in task queue and microtask queue has higher priority than task queue. so promise will execute before setTimeout.