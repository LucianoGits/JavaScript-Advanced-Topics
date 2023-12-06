// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
//in arrays we have methods which use Higher order function e.g .map,.filter,.forEach and ..reduce etc

function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(1));

function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
noisy(Math.max)(3, 2, 1);
