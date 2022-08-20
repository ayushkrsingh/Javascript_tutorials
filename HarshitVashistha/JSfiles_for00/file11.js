// undefined
// null
// BigInt

            // %%%%1st - Undefined

// let fname;
// // const fname       ---->   GIVES ERROR
// console.log(typeof fname);  // -> undefined
// fname = "Ayush";
// console.log(typeof fname, fname);



            //  @@@@@2nd ---  Null


// let myvar = null;
// console.log(myvar);
// console.log(typeof myvar);   //    --> object  !!!!  error, bug in JS!




            //  $$$$$$$3rd  - BigInt


let mynum = BigInt(13);
let secnum = 234n;
// console.log(mynum);          //  13n
console.log(Number.MAX_SAFE_INTEGER);           // 9007199254740991
console.log(mynum + secnum);            ///  Both should be BigInt







