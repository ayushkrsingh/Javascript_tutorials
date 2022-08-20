//  break keyword
//  continue keyword


//  $$$$$$$$      1      $$$$$$$$$
for(let i = 0; i<=10; i++){
    if (i===4) {
        break;          // will stop looping from here
    }
    console.log(i);
}
console.log("excution jumped here!");

//  ##########    2     #########
for(let i = 0; i<=10; i++){
    if (i===4) {
        continue;       //   will miss 4
    }
    console.log(i);
}

console.log("done");
