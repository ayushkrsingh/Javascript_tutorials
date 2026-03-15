// playing with HTML classes, classList

const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList);
sectionTodo.classList.add("bg-dark");
const dark = document.querySelector(".bg-dark");
// dark.style.backgroundColor = "#841919"; // this is like inline css, not recommended, this overrides the css and persist even after removing the class "bg-dark"
const ans = sectionTodo.classList.contains("container");    // true
console.log(ans);
sectionTodo.classList.toggle("bg-dark");    // toggle removed the class "bg-dark" which was added before, if we run this line again, it will add the class "bg-dark" again


const header = document.querySelector(".header");
console.log(header.classList);
header.classList.add("bg-dark");

