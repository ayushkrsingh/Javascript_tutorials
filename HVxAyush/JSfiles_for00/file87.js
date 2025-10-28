// creating subclass using 'extend'

class CreateAnimal{
    constructor(name, age, food){
        this.name = name,
        this.age = age,
        this.food = food
    }

    eat(){
        return `${this.name} eates ${this.food}`;
    }
    isCute(){
        return this.age <= 2;
    }
}
const cow = new CreateAnimal("Coww", 6, "Roti");
// console.log(cow);
// console.log(cow.eat());
// console.log(cow.isCute());



class Dog extends CreateAnimal{     // now Dog is like a subclass of CreateAnimal which can be used as a class to create new objects.
    identity(){
        return this.age <= 3 ? "too small" : "normal";
    }
}


const tommy = new Dog("Tommy", 2, "pedgree");
console.log(tommy);
console.log(tommy.eat());   // will take this method from CreateAnimal class as dog is the subclass of CreateAnimal
console.log(tommy.identity());

