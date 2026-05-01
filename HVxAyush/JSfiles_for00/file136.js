

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading");      // removed the heading4 element to demonstrate catch
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");



function modifyHeadings(heading, text, color, time) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if (heading) {
                heading.textContent = text;
                heading.style.color = color;
                resolve();
            } else {
                reject("heading not found!!")
            }
        }, time);
    })
}

// modifyHeadings(heading1, "ONE", "pink", 1000)
//     .then(()=>{
//         return modifyHeadings(heading2, "TWO", "yellow", 1000);})
//     .then(()=>{
//         return modifyHeadings(heading3, "THREE", "violet", 1000);})
//     .then(()=>{
//         return modifyHeadings(heading4, "FOUR", "green", 1000);})
//     .then(()=>{
//         return modifyHeadings(heading5, "FIVE", "red", 1000);})
//     .then(()=>{
//         return modifyHeadings(heading6, "SIX", "brown", 1000);})
//     .then(()=>{
//         return modifyHeadings(heading7, "SEVEN", "purple", 1000);})
//     .then(()=>{
//         return modifyHeadings(heading8, "EIGHT", "cyan", 1000);})
//     .then(()=>{
//         return modifyHeadings(heading9, "NINE", "magenta", 1000);})
//     .then(()=>{
//         return modifyHeadings(heading10, "TEN", "blue", 1000);})
//     .catch(error=>{
//         alert(error);
//     })



//---------------- OR ------------------
// WE CAN ALSO REMOVE THE curly brackets and return keyword from arrow function because we have that feature
// like------


modifyHeadings(heading1, "ONE", "pink", 1000)
    .then(()=>modifyHeadings(heading2, "TWO", "yellow", 1000))
    .then(()=>modifyHeadings(heading3, "THREE", "violet", 1000))
    .then(()=>modifyHeadings(heading4, "FOUR", "green", 1000))   // runs catch because i have removed heading4 from querySelector above----
    .then(()=>modifyHeadings(heading5, "FIVE", "red", 1000))
    .then(()=>modifyHeadings(heading6, "SIX", "brown", 1000))
    .then(()=>modifyHeadings(heading7, "SEVEN", "purple", 1000))
    .then(()=>modifyHeadings(heading8, "EIGHT", "cyan", 1000))
    .then(()=>modifyHeadings(heading9, "NINE", "magenta", 1000))
    .then(()=>modifyHeadings(heading10, "TEN", "blue", 1000))
    .catch(error=>{
        alert(error);
    })
