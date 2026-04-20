// Keypress event--------------
// Mousemove events-----------


const body = document.body;
body.addEventListener("keypress", (e)=>{
    console.log(e.key);
})


const button = document.querySelector(".btn-headline");

button.addEventListener("mouseover", (e)=>{
    console.log("mouseover event occured")
})
button.addEventListener("mouseleave", (e)=>{
    console.log("mouseleave event occured")
})