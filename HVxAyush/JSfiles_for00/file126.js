// console.log("hello");

// const body = document.body;
// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// // Capturing Events-----

// child.addEventListener("click", ()=>{
//     console.log("Capture Child")
// }, true);
// parent.addEventListener("click", ()=>{
//     console.log("Capture Parent")
// }, true);
// grandparent.addEventListener("click", ()=>{
//     console.log("Capture Grandparent")
// }, true);
// body.addEventListener("click", ()=>{
//     console.log("Capture Body")
// }, true); 

// // Non-capturing Events-----

// // Event BUBBLING / Event PROPOGATION  -------

// child.addEventListener("click", ()=>{
//     console.log("Bubble Child")
// });
// parent.addEventListener("click", ()=>{
//     console.log("Bubble Parent")
// });
// grandparent.addEventListener("click", ()=>{
//     console.log("Bubble Grandparent")
// });
// body.addEventListener("click", ()=>{
//     console.log("Bubble Body")
// }); 


// --- Event Delegation (*make sure to comment above code entirely*)----

const grandparent = document.querySelector(".grandparent");

grandparent.addEventListener("click", (e)=>{
    // console.log("You clicked something")
    console.log(e)
})