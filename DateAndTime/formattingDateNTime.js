//Function to format date
//str is how I want the data to be formatted
const formatDate = (
  dateObj = new Date(),
  str = "MM-d-YYYY, DD at hh:mm:ss"
) => {
  const [day, month, date, year] = dateObj.toDateString().split(/\s/);

  const [hour, minutes, ...rest] = dateObj.toTimeString().split(":");

  const [seconds] = rest[0].split(/\s/);

  const formattedDate = str
    .replaceAll("d", date)
    .replaceAll("DD", day)
    .replaceAll("MM", month)
    .replaceAll("YYYY", year)
    .replaceAll("hh", hour)
    .replaceAll("mm", minutes)
    .replaceAll("ss", seconds);
  return formattedDate;
};

console.log(formatDate(new Date(2001, 3, 26, 23, 23, 04)));
