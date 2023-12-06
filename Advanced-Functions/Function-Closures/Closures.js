//this an example of closures
// closures allow you to return a function that has access to all variables created inside the main function
// with this it allows you to create instances of a function without worrying about new variables and stuff

// function wrapValue(n) {
//   let local = n;
//   return () => local;
// }
// //instances of the wrapValue functions
// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1(), wrap2());

//example 2. creating a multiplier function

function multiplier(factor) {
  return (number) => number * factor;
}

let timesBy2 = multiplier(2);
console.log(timesBy2(20));

//example 3. greeting a person
let luciano = "Luciano";
let janice = "Janice";

function helloUser() {
  let hello = "Hello ";
  return (name) => hello + name;
}

let userName = helloUser();
console.log(userName(janice));
