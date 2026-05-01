// Promise.resolve
// Promise Chaining

// then() method *returns* a new promise, which can be used for chaining
 
function myPromise() {
    return new Promise((resolve, reject)=>{
        resolve("faahh");
    })
}

myPromise()
    .then((value)=>{
        console.log(value);
        value += " bruhh";
        return value;       // internally creates a promise and resolves it with the value returned like this: return Promise.resolve(value);
    })
    .then((value)=>{
        console.log(value);
        value += " extra";
        return value;
    })
    .then((value)=>{
        console.log(value);
    })
