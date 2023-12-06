//This is the main class
class Parents {
  constructor(fName, lName, eyeColor, hairColor, height) {
    this.fName = fName;
    this.lName = lName;
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
    this.height = height;
  }
  //accessor methods
  get fullName() {
    return `${this.fName} ${this.lName}`;
  }
  get intro() {
    return `My name is ${this.fullName}. My eyes are ${this.eyeColor}, my hair color is ${this.hairColor} and I am ${this.height}CM tall :)`;
  }
}
//Person class instances
let father = new Parents('Lucas', 'Ngulas', 'brown', 'brown', 180);
let mother = new Parents('Isabel', 'Pedro', 'brown', 'brown', 170);

//Children class (sub class) that inherits from Parents class
class Children extends Parents {
  //constructor
  constructor(fName, lName, eyeColor, hairColor, height) {
    //calling all fields we want to inherit from Parents class
    super(fName, lName, eyeColor, hairColor, height);
  }
  //get method
  get Surnameinheritance() {
    return this.lName == 'Ngulas'
      ? `My last Name is ${this.lName} and I inherited it from my father ${father.fullName}.`
      : `My surname is ${this.lName} and I did not inherit from ${father.fullName}.`;
  }
}
let firstChild = new Children('luciano', 'Ngulas', 'dark Brown', 'brown', 182);

console.log(
  `My dad: ${father.intro}\nMy mom: ${mother.intro}\nMe: ${firstChild.intro} and as you can see ${firstChild.Surnameinheritance}`
);
