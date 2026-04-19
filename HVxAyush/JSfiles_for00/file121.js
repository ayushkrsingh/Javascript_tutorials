// Event Object-----------

// when we add event listener to an element then, 
// js Engine ---- line by line executes
// browser ---- js engine + WebAPI

// when browser gets to know that user performed an event, which we were listening,
// the browser performs two actions  :-

// 1) gives callback function to the js engine to execute
// 2) also gives the event information in the form of an object with the callback function
//---- this information is received as an object to us;;;


// example-----

// function hello(abc){  // here abc is the event object {firstkey: "value1", secondkey: "value2"} which is passed by the browser to us when the event occurs
//     console.log(abc);
// }
// hello({firstkey: "value1", secondkey: "value2"});


// ---------------------------------------------

const allButtons = document.querySelectorAll("button");

for(let button of allButtons){
    button.addEventListener("click", (e) => {
        // console.log(e);              // e is the event object which is passed by the browser to us when the event occurs
        console.log(e.currentTarget);   // e.currentTarget gives us the element on which the event occurred
    }); 
}

