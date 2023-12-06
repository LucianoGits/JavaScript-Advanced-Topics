//function to console log a parameter
const log = (str) => console.log(str);
const now = new Date();

// setters --> think of of as get in Java
now.setDate(21);
now.setMonth(10);
now.setFullYear(2022);

// getters --> think of of as get in Java

log(now.getDate());
log(now.getMonth());
log(now.getFullYear());

//function to show time without declaring an instance of Date object

const showTime = (date = Date()) => {
  const dateObj = new Date(date);
  return `Today is: ${dateObj.toDateString()}
Time: ${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;
};

log(showTime());
