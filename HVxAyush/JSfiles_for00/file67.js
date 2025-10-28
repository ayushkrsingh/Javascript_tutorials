// Sets     --> it is Iterable
// store data
// set ke paranthesis me koi iterable hi store krenge -> string, array...
// sets have its own methods
// no index-based access
// order is not guranteed
// unique items only (no duplicates allowed)

const myWord = new Set("abcd");
console.log(myWord)

// const numset = new Set(1234556);  //ERROR because numbers are not iterable

// const numbers = new Set([1, 2, 3, 3, 4, 5]);    // will ignore the repeated numbers like 3 in this case
// console.log(numbers);
// console.log(numbers[2]);    //undefined coz order is not guranteed 


const mynumbers = new Set();
mynumbers.add(1);
mynumbers.add(2);
mynumbers.add(3);
mynumbers.add(1);   // will ignore this because 1 is alreaady added
mynumbers.add(4);
mynumbers.add(5);
mynumbers.add(6);

const items = ['item1', 'item2', 'item3'];
mynumbers.add(items);
// mynumbers.add(items);    // ignore this

mynumbers.add("item4");
mynumbers.add("item4");     // ignore this

mynumbers.add(["item5", "item6"]);
mynumbers.add(["item5", "item6"]);  // will include this beacuse this has a different adderess in memory


console.log(mynumbers);

for(let number of mynumbers){   // iterable
    console.log(number);
}


// has property
if(mynumbers.has(1)){
    console.log("1 is present");
}else{
    console.log("1 is present");
}



//  ^^^^^^^^^  REAL LIFE EXAMPLE  ^^^^^^^^^^

const myArray = [1, 2, 1, 3, 4, 2, 5, 6, 6, 7];
console.log(myArray);

const uniqueElems = new Set(myArray);
console.log(uniqueElems);

// to find length       (.length will not work)
let length = 0;
for(let num of uniqueElems){
    // length = length+1;   //OR
    length++;
}
console.log(length);