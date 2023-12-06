// Adding day and time tutorial

const date = new Date();
//adding days function
const addDays = (dateObj = new Date(), days = 0) => {
  const daysToMs = days * 86400000;
  return new Date(dateObj.getTime() + daysToMs).toLocaleString('en-US', {
    timeZone: 'CET',
  });
};
//adding Hours function
const addHours = (dateObj = new Date(), hours = 0) => {
  const hoursToMs = hours * 360000;
  return new Date(dateObj.getTime() + hoursToMs).toLocaleString('en-US', {
    timeZone: 'CET',
  });
};

//adding minutes function
const addMinutes = (dateObj = new Date(), minutes = 0) => {
  const minutesToMs = minutes * 60000;
  return new Date(dateObj.getTime() + minutesToMs).toLocaleString('en-US', {
    timeZone: 'CET',
  });
};
console.log(
  `Current date: ${date.toLocaleString('en-US', {
    timeZone: 'CET',
  })}`
);
console.log(`Current date + 10 Days: ${addDays(date, 10)}`);
console.log(`Current date/time + 4 Hours: ${addHours(date, 4)}`);
console.log(`Current date/time + 120 minutes: ${addMinutes(date, 120)}`);
