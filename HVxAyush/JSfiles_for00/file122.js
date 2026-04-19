console.log("script starts");
const allbuttons = document.querySelectorAll(".mybuttons button");

allbuttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let num = 0;
        for(let i=0; i<1000000000; i++){
            num+=i;
        }
        console.log(e.currentTarget.textContent + num);
    });
});

let outervar = 0;
for(let i=0; i<1000000000; i++){
    outervar+=i;
}
console.log("the value of outervar is" + outervar);
console.log("script ends");