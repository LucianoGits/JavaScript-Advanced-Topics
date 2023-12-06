//Abstraction is the main structure of a Super class(OG parent class or prototype or template)
//Inheratance happens when a subclass inherits properties from parent class

// this is a template and constructor
class Person {
  constructor(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;

    this.ageVerification = isAdult => {
      return this.age > 18
        ? `Since you are ${age}, you are an adult`
        : `Since you are ${age}, you are not an adult`;
    };
  }
}

//this is a subclass
class Employee extends Person {
  constructor() {
    super();
    new Person.caller(this.fName, this.lName, this.age);
    this.position = position;
    this.salary = salary;
    this.experienceLevel = experienceLevel;
  }
}

const Luciano = new Employee();
