// nested destructuring
const users = [
    { userID: 1, name: "Ayush", gender: "Male", },
    { userID: 2, name: "Harshit", gender: "Male", },
    { userID: 3, name: "Amanda", gender: "Female", }
]
// const [user1, user2, user3] = users;
// console.log(user1);

// destructuring nested objects
const [{name: fname, userID: AyushID}, ,{gender: AmandaGender}] = users;
console.log(fname, AmandaGender);
console.log(AyushID);
