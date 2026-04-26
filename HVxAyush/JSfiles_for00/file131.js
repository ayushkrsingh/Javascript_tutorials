

// This code with change the textContent of the headings one by one every second. It will stop when all the headings have been changed.

// const body = document.body;
// const headings = document.querySelectorAll("h1");

// console.log(headings)

// let i = 0;
// setInterval(() => {
//     if (i>=headings.length) {
//         clearInterval();
//         return;
//     }
//     headings[i].textContent = `Heading ${i+1}`;
//     i++;
// }, 1000);




//--------------- task -------------------

// Text      Delay    Color

// one       1s       Violet
// two       2s       purple
// three     2s       red
// four      1s       Pink
// five      2s       green
// six       3s       blue
// seven     1s       brown


const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading49");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

///////////// CALLBACK HELL 🎃 --------------

// setTimeout(() => {
//     heading1.textContent = "One"
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "Two"
//         heading2.style.color = "purple"
//         setTimeout(() => {
//             heading3.textContent = "Three"
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "Four"
//                 heading4.style.color = "pink"
//                 setTimeout(() => {
//                     heading5.textContent = "Five"
//                     heading5.style.color = "green";
//                     setTimeout(() => {
//                         heading6.textContent = "Six"
//                         heading6.style.color = "blue";
//                         setTimeout(() => {
//                             heading7.textContent = "Seven"
//                             heading7.style.color = "brown";
//                         }, 1000);
//                     }, 3000);
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 2000);
// }, 1000);




function modifyHeadings(heading, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if (heading) {
            heading.textContent = text;
            heading.style.color = color;
            if (onSuccessCallback) {
                onSuccessCallback();
            }
        } else {
            if (onFailureCallback) {
                onFailureCallback();
            }
        }
    }, time);
}

/////////// ---------- Pyramid OF DOOM 🐫🛕 -----------

modifyHeadings(heading1, "one", "violet", 1000, () => {
    modifyHeadings(heading2, "two", "purple", 1000, () => {
        modifyHeadings(heading3, "three", "red", 1000, () => {
            modifyHeadings(heading4, "four", "pink", 1000, () => {
                modifyHeadings(heading5, "five", "green", 1000, () => {
                    modifyHeadings(heading6, "six", "blue", 1000, () => {
                        modifyHeadings(heading7, "seven", "brown", 1000, () => {

                        }, () => { console.log("Heading7 not found!"); })
                    }, () => { console.log("Heading6 not found!"); })
                }, () => { console.log("Heading5 not found!"); })
            }, () => { console.log("Heading4 not found!"); })
        }, () => { console.log("Heading3 not found!"); })
    }, () => { console.log("Heading2 not found!"); })
}, () => { console.log("Heading1 not found!"); })