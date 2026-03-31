// static vs live list

// querySelector... always gives "static" list;
// getElementBy... always gives "live" list


const ul = document.querySelector(".todo-list");
// const listItems = document.querySelectorAll(".todo-list li");   // output mein Nodelist with 5 elements
const listItems = ul.getElementsByTagName("li");                   // output mein HtmlCollection with 6 elements
const sixthLi = document.createElement("li");
sixthLi.textContent = "Item 6";
ul.append(sixthLi);
console.log(listItems);  