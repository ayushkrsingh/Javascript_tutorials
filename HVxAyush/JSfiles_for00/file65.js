// splice method 
// start, delete, insert

const myArray = ["item1", "item2", "item3"];

// delete
// const deletedItem = myArray.splice(0, 1);   // means 0th index se start karna hai aur 1 element delete karna hai aur kuchh bhi add nhi karna hai isliye kuchh mat likho insert ke jagah pe
// console.log("deleted item is", deletedItem);


// insert
// myArray.splice(0, 0, "inserted1", "inserted2");   // means 0th index se start karna hai aur koi item delete nhi karna hai aur "inserted1" aur "inserted2" ko insert karna hai..


// insert and delete
myArray.splice(1, 2, "inserted3");   // means 1st index se start karna hai aur 2 item delete karna hai aur "inserted3" ko insert karna hai 


console.log(myArray);

