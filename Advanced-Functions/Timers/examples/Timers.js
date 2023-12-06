let counter = 0;

//setInterval is used to pring counnter every second and eachtime it is called counter increases
let loopMe = setInterval(() => {
  console.log('Counter: ' + counter);
  counter++;
}, 1000);

//setTimeout call a funnction after a given time once. here is clear the Interval of "loopMe" and makes counter = 0. it basically stops the setInterval after a given time.
setTimeout(() => {
  clearInterval(loopMe);
  counter = 0;
}, 10000);
