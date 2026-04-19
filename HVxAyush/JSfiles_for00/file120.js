
const allButtons = document.querySelectorAll("button");
console.log(allButtons)


// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         // console.log(button.innerHTML);
//         // console.log(this)
//         console.log(this.textContent);
//     })
// }



// OR use traditional loop OR use forEach---------------



allButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log(this.textContent)
    })
})