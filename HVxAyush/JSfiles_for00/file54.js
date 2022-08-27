// callback functions

function myfunc2(name){
    console.log("Inside myfunc2");
    console.log("Your name is", name);
}

function myfunc(callback){
    console.log("Inside myfunc");
    callback("Ayushh");     // this will call myfunc2
}


myfunc(myfunc2);    // callback parameter in myfunc becomes "myfunc2" function..


// 6:12:00