const todoForm = document.querySelector(".form-todo");
const todoText = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list")
const doneBtn = document.querySelectorAll("button.done");
const removeBtn = document.querySelectorAll("button.remove");
const eachTodo = document.querySelector(".todo-list li");
// const addedText = 

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();   // prevents from page reload
    console.log("Submit clicked");
    console.log(todoText.value);
    const newLi = document.createElement("li");
    const newInnerHtml = `<span class="text">${todoText.value}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>`;
    newLi.innerHTML = newInnerHtml;
    todoList.append(newLi);
    todoText.value = "";
});

todoList.addEventListener("click", (e)=>{
    console.log(e.target);
    if(e.target.classList.contains("done")){
        const li = e.target.parentNode.parentNode;
        const span = li.querySelector(".text");
        span.style.textDecoration = "line-through";
        span.style.color = "red";
    }
    if(e.target.classList.contains("remove")){
        const li = e.target.parentNode.parentNode;
        li.remove();
    }
})
