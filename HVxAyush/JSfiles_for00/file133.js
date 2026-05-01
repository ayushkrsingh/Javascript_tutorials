// Function returning promise----------

function ricePromise(){
    const bucket = ["chips", "banana", "rice", "vegetable", "salt"];
    return new Promise((resolve, reject) => {
        if (bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")) {
            resolve("Fried Rice Ready !!");
        } else {
            reject("Could'nt make Fried Rice");
        }
    });
}

ricePromise().then(
    (myFriedRice)=>{
        console.log(myFriedRice);
    }
).catch(
    (error)=>{
        console.log(error);
    }
)