// Methods are nothing more than properties that hold function values. This is a simple method:

//example 1
// have an empty array
let rabbit = {};

//creating custom method in the object
rabbit.speak = (line) => {
  console.log(`The rabbit says '${line}'`);
};
rabbit.speak("hello Papi");

//example 2
//function expression
let greet = function (line) {
  console.log(`The ${this.type} lion says ${line}`);
};

//calling the function with the object
let fierceLion = { type: "fierce", greet };
fierceLion.greet("it's time to devour YOU!");

//example 3 of methods, using the function with objects
greet.call(fierceLion, "I am big MAD and you look delicious asf");

//example 4.1

//you can do something like the following code, which references this from inside a local function:
//If I had written the argument to map using the function keyword, the code wouldn’t work.
function normalize() {
  console.log(this.coords.map((n) => n / this.length));
}
normalize.call({ coords: [0, 2, 3], length: 5 });

//example 4.2
//this is another way of doing example 4.1
//object I want to access
let coords = { coords: [0, 2, 3], length: 5 };

//same function(example 4.2) with a little bit of wizzle dazzle
function normalizeV2(obj) {
  let calc = obj.coords.map((n) => (obj.length ? n / obj.length : n / 2));
  return calc;
}

console.log(normalizeV2(coords));
