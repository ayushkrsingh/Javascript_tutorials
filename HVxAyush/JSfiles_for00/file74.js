const user1 = {
    fname: "Ayush",
    age: 15,
    about: function (){
        console.log(this.fname, this.age);
    }
}

// don't do this mistake
// user1.about();   // will simply work but what if I want to store it in a variable
// const myfunc = user1.about;     // here we just wrote the function written in object i.e, user1 that's why it recognises "this" the window object and not user1
// OR  ######
// const myfunc = function (){     // we just did this according to above sentence
//     console.log(this.fname, this.age);
// }

const myfunc = user1.about.bind(user1);     //bind the object which you want to use either it will take window object
myfunc();   /// undefined undefined  reason↟
