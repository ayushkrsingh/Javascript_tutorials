// arrow functions - behaviour

// %%%%%   ARROW FUNCTION KA 'this' NAHI HOTA HAI   %%%%%
// $$$$$   ARROW FUNCTION KA 'this' ek step up hota hai jaise agar 'this' kisi object me use hua hai to 'this' window object show karega na ki vo object


const user1 = {
    fname: "Ayush",
    age: 15,
    about: () => {
        console.log(this);  // here this is window object
        console.log(this.fname, this.age);
    }
}
// user1.about();  // undefined undefined coz it is taking window object
user1.about.call(user1);    // no effect coz u also cannot change the object of this used in an arrow function   

