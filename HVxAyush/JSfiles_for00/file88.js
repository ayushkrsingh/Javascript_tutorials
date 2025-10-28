// super


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
    identity(){
        return this.age <= 3 ? "too small" : "normal";
    }
    run(){
        return `${this.name} runs at a speed of ${this.speed}km/h`
    }
}


const tommy = new Dog("Tommy", 2, 40);
console.log(tommy);
console.log(tommy.eat());   // will take this method from CreateAnimal class as dog is the subclass of CreateAnimal
console.log(tommy.identity());
console.log(tommy.run());