// instance of Date object
const today = new Date();

console.log(`This ".toDateString()" method: ${today.toDateString()}`);

// .toLocaleString can be used like this, it takes in a parameter with the language and time zone you want displayed:
console.log(`Warsaw: ${today.toLocaleString("pt-PT", { timeZone: "CET" })}`);

//my birthday and the difference from current date and birthday example

const lucianosDob = new Date("4 October, 2000 23:23:00");

// This function accepts a valid date object, subtracts it from Date.now() which is a built-in method that produces the current time value in milliseconds since epoch. This is then divided by 31536000000. Finally, this result would be in negative, so you’ll be using Math.abs() to turn this into an absolute positive value. The .toPrecision() ensures you get a value that is precise to 4 points of the decimal.

const yearsTo = (date) => {
  const diff = (date - Date.now()) / 31536000000;
  return Math.abs(diff.toPrecision(4));
};

console.log(
  `Luciano was born on ${lucianosDob.toLocaleString(
    "pt-PT"
  )}. That was ${yearsTo(lucianosDob)} years ago!`
);
