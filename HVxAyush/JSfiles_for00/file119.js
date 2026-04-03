// this keyword in EventListener---

const btn = document.querySelector(".btn-headline");

// in case of normal function--

// btn.addEventListener("click", function(){
//     console.log(`Value of this for normal function is: ${this}`);
//     console.log(this);   // button itself
// });



// in case of arrow function--

btn.addEventListener("click", ()=>{
    console.log(`Value of this for arrow function is: ${this}`); 
    console.log(this); // window Object
});