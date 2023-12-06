// Recursion is when a function calls itsself
// here is an example of a function ("power") calling itself
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
// console.log(power(2, 10));
// recursive function to find a sequence of a given number and see how it can be reached by either adding or multiplication of numbers 3 or 5
// function findSolution(target) {
//   function find(current, history) {
//     if (current == target) {
//       return history;
//     } else if (current > target) {
//       return null;
//     } else {
//       return (
//         find(current + 5, `(${history} + 5)`) ||
//         find(current * 3, `(${history} * 3)`)
//       );
//     }
//   }
//   return find(2, '1');
// }
// console.log(findSolution(25));

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      const add5 = find(current + 5, `(${history} + 5)`);
      const multiply3 = find(current * 3, `(${history} * 3)`);
      if (add5) return add5;
      if (multiply3) return multiply3;
      return null;
    }
  }

  const result = find(1, '1');
  if (result) {
    return result;
  } else {
    return 'No solution found.';
  }
}

console.log(findSolution(28));
