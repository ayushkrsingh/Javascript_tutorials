// Add new HTML elements using JavaScript

const todolist = document.querySelector(".todo-list");
// todolist.innerHTML = "<li> new Todo </li>";      // this will replace the existing content of the todo-list with the new content which is <li> new Todo </li>
// todolist.innerHTML += "<li> new Todo 2 </li>";     // this will add the new content <li> new Todo 2 </li> to the existing content of the todo-list without replacing it.


// we should avoid using innerHTML to add new elements to the DOM because it is not efficient and can lead to security issues like XSS (Cross Site Scripting) attacks. Instead, we can use createElement and appendChild methods to add new elements to the DOM.

// documene.createElement() ---
// append
// prepend
// remove
// before
// after


const todoList = document.querySelector(".todo-list");
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "New Todo Item";   
todoList.append(newTodoItem);   // this will add the newTodoItem (which is <li></li>) to the 'end' of the todoList
// todolist.prepend(newTodoItem);   // this will add the newTodoItem (which is <li></li>) to the 'beginning' of the todoList
console.log(newTodoItem);



const LastItem = document.querySelector(".todo-list li:last-child");
// LastItem.remove(); // this will remove the last item of the todo-list which is "New Todo Item" in this case


todoList.before(newTodoItem); // this will add the newTodoItem (which is <li></li>) with text "New Todo Item" before the todoList