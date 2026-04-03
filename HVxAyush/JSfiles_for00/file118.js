// 6:05:00

// EVENTs in JS---------------


// "click"

const btn = document.querySelector(".btn-headline");

// method 1-------

// btn.onclick = function(){
//     console.log("you clicked me!");
// }


// Method 2----------

// btn.addEventListener("click", function(){
//     console.log("You Clicked ME !!");
// })

// using arrow function
btn.addEventListener("click", ()=>{
    console.log("clicked using arrow function!!");
})