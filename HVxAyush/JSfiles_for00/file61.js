// find method

const MyArray = ["Hello", "Ayush", "Lion", "Billi", "Hero"]

// function Len4(string){
//     return string.length === 4;
// }
// $$$    OR
const ans = MyArray.find((string) => string.length===4);

// const ans = Len3("Ayu"); // true
// console.log(ans);

// const ans = MyArray.find(Len4);
console.log(ans);   // first item with 4 letters , no matter kitne hai aage



// $$$$$$$$$$$   Realistic Example $$$$$$$$$$

const users = [
    {userId: 1, userName: "Ayush"},
    {userId: 2, userName: "Harshit"},
    {userId: 3, userName: "Tom"},
    {userId: 4, userName: "Rolla"},
    {userId: 5, userName: "Myter"},
]

const nameOfuser = users.find((user)=>{
    return user.userId === 3;
});
console.log(nameOfuser.userName);

