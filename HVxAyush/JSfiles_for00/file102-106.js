// DOM - Document Object Model

// console.log(document);

// console.log(document.getElementById("main-heading"));

// select element using getelementbyid
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);

// select element using queryselector
const mainHeadingQS = document.querySelector("#main-heading");
console.log(mainHeadingQS);

//for multiple elements having same class name
const navitems = document.querySelectorAll(".nav-item");
console.log(navitems);

//changing text content
console.log(mainHeading.textContent); // gives all text content including hidden text
console.log(mainHeading.innerText); // gives only visible text content
// mainHeading.textContent = "Changed Heading using JS";

// changing styles
mainHeading.style.color = "red";
mainHeading.style.backgroundColor = "black";
mainHeading.style.padding = "1rem";
