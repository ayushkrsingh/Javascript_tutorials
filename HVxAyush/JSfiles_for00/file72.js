console.log(this);   // window object
console.log(this === window);  // true

function myfunc(){
    // console.log("hello World");
    "use strict"
    console.log(this);
}
// myfunc();    // will print window object if use strict is not written
// OR
window.myfunc();    // same output because myfunc is stored in window object 
myfunc();   // undefined because use strict is used  


