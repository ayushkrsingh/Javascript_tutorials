//  intro to for loop
//  print 0  to 9

for(let i = 0; i<=5; i++){ // value of i does not exist outside this if block
    console.log(i);         // but var i will exixt outside the block
}
// console.log(i); // error

// to use i outside the loop
console.log("next loop");

let i = 0;
for(; i<=5; i++){
    console.log(i);        
}
console.log(i);
