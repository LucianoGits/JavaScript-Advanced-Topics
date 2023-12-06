// Partial application is a functional programming concept where you fix a certain number of arguments of a function and generate a new function. This new function takes the remaining arguments as its input. In other words, partial application allows you to create a specialized version of a function with some of its parameters pre-set, making it more specific and convenient to use in certain contexts.

function add(a, b) {
  return a + b;
}

// Partially apply the 'add' function with the first argument fixed to 2.
//1 method of using partial application - using bind method
const addTwo = add.bind(null, 2);
// Now, 'addTwo' is a new function that adds 2 to its argument.
console.log(addTwo(3));

//method 2 - use closures to achieve it
const partialApply = (fn, arg1) => {
  return arg2 => fn(arg1, arg2);
};

const addThree = partialApply(add, 3);
console.log(addThree(10));
