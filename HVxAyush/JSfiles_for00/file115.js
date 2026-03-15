// clone nodes


const todoList = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "New Item added";
const cloneLi = li.cloneNode(true);
todoList.append(li);
todoList.prepend(cloneLi);