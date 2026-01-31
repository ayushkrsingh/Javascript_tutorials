// get and set attributes

const link = document.querySelector(".nav-item a");
console.log(link.getAttribute("href"));
console.log(link.getAttribute("href").slice(1)); // just to print home instead of #home -- I sliced the text that is the first index;;
// link.setAttribute("href", "https://example.com");
// console.log(link.getAttribute("href"));



const input = document.querySelector(".form-todo input");
console.log(input.getAttribute("type"));

