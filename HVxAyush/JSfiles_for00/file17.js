//    Nested if else

// ##########   Game --- winning no. = 32;

// 32 -- your guess is right
// 25 -- too low
// 45 -- too high

let winno = 32;
let userguess = +prompt("Guess a number");  // +  ----- to change type of prompt num from string to number
// console.log(typeof userguess, userguess);    

if (userguess === winno) {
    console.log("Your guess is right!");
    
}else{
    if (userguess < winno) {
        console.log("Too Low!!");
    }
    else{
        console.log("Too high!!");
        
    }
    
}


