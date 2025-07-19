// what is class & object
// class is the 
class Person {
    constructor(name) {
      this.name = name;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  class Student extends Person {
    constructor(name, course) {
      super(name); // call parent constructor
      this.course = course;
    }
  
    info() {
      console.log(`${this.name} is learning ${this.course}`);
    }
  }
  
  const student1 = new Student("Jaydip", "ReactJS");
  student1.greet(); // Hello, my name is Jaydip
  student1.info();  // Jaydip is learning ReactJS
  