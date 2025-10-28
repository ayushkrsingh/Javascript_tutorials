class CreateAnimal{
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    eat(){
        return `${this.name} is eating.`;
    }
    isCute(){
        return this.age <= 2;
    }
}
const cow = new CreateAnimal("Coww", 6, "Roti");


class Dog extends CreateAnimal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }
    run(){
        return `${this.name} runs at a speed of ${this.speed}km/h`
    }
    eat(){      // still there is a same method in base class- CreateAnimal but when we call this using tommy.eat, this method will be called
        return `Modified: ${this.name} is eating`
    }
}


const tommy = new Dog("Tommy", 2, 40);
// console.log(tommy);
console.log(tommy.run());
console.log(tommy.eat());   // calls the method present in dog class and not in the CreateAnimal because it firstly checks the methods as if they are present in the dog class or not and if not it willl check it in its parent/super class that is CreateAnimal,,, In this case it will find eat method in dog class and it will call the same.