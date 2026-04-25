// setTimeout-------------


console.log("Script Starts");

const id = setTimeout(() => {
    console.log("setTimeout Runs!!");
}, 1000);                               // takes **minimum** of 1000ms to run the code inside this setTimeout function, but it can run after 1000ms if the call stack is empty. If the call stack is not empty, then it will run as soon as the call stack is empty, even if it is after 1000ms. So, it is not guaranteed that the code inside this setTimeout will run after exactly 1000ms, it can run after more than 1000ms if the call stack is not empty.
for(let i=0; i<10000; i++){
    console.log("inside loop")
}
clearTimeout(id);       // cancels the setTimeout before it can run, so "setTimeout Runs!!" will never be printed in the console
console.log("Script Ends!");