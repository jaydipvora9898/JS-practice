// 2 type of Polymorphism
// 1. Overriding

// class Animal{
//     barks(){
//         console.log("how Animal");
//     }
// }

// class Dogs extends Animal{
//     barks(){
//         console.log("Howwww hooowwwww");
//     }
// }

// class Cats extends Animal{
//     barks(){
//         console.log("Miiiiiiuuuu MMMMMMmIIIiiiuuu");
//     }
// }

// let obj = new Cats;
// obj.barks();

// Abstraction

// class Car {
//     constructor(brand) {
//       this.brand = brand;
//     }

//     startEngine() {
//       console.log("Engine started...");
//     }

//     drive() {
//       this.startEngine();
//       console.log(`Driving the ${this.brand}`);
//     }
//   }

//   const myCar = new Car("Mercedes");
//   myCar.drive();


// 1. 

class Students {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayDetails(){
        console.log(`Name${this.name} ,Age ${this.age}`);
    }
}


let Students = new Students("jaydip",21);
Students.displayDetails();