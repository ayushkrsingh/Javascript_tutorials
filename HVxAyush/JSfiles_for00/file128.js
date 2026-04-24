console.log("Script Starts");

setTimeout(() => {
    console.log("setTimeout Runs!!");
}, 1000);                               // takes **minimum** of 1000ms to run the code inside this setTimeout
for(let i=0; i<10000; i++){
    console.log("inside loop")
}
console.log("Script Ends!");