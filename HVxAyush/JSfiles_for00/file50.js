// block scope vs function scope




// let and const are block scope 

{
    let fname = "Ayush";    // let/const
    console.log(fname); // can access fname (Ayush)
}
// console.log(fname);     // cannot access fname 

{
    const fname = "Harshit";  // let/const
    console.log(fname); // can access fname (Harshit)
}


let fname = "Tom";  // let/const
console.log(fname);     // can access fname (Tom)







// // var is function scope

{
    var fname2 = "Ayush";
    console.log(fname2);    
}

{
    console.log(fname2);    // can access fname2 as var is func scope
}