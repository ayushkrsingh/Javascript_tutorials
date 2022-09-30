// iterables
// jispe hum "for of" loop laga saken
// string, arrays are iterable

// string
// const firstName = "Ayush";
// for(let char of firstName){
//     console.log(char);
// }

// array
const items = ["item1", "item2", "item3"];
for(let item of items){
    console.log(item);
}

// object   -->  NOT ITERABLE
// const myObj = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3",
//     key4: "value4",
// }
// for(let keys of myObj){
//     console.log(keys);      /// ERROR coz objects are not iterable
// }




// array like objects
// jinke paas length property hoti hai
// aur jinko hum index se access kar sakte hai
// ex--  string

const firstName = "Ayush";
console.log(firstName.length);
console.log(firstName[2]);